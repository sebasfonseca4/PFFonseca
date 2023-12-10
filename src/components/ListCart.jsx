import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc  } from "firebase/firestore";
import Swal from "sweetalert2";

const clearValues = { name: "", telefono: "", email: "" };


const ListCart = () => {
    const { items, limpiarCarrito, removeItem } = useContext(CartContext);
    const [buyer, setBuyer] = useState(clearValues);
    const total = items.reduce((acumulado, actual) => {
        return acumulado + actual.precio * actual.quantity;
    }, 0)

    const handleSendOrder = () => {
        const order = { 
            buyer: buyer,
            items: items,
            total: total
        };
        const db = getFirestore();
        const orderCollection = collection (db, "orders");

        addDoc(orderCollection, order).then(({id}) => {
            if (id) {
                Swal.fire("Pedido completo para" + id);
                limpiarCarrito();
                setBuyer(clearValues);
            }
        }) 
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setBuyer((prev) => {
            return {    
                ...prev,
                [name]: value
            }
        })
    }
  return (
    <>
      <Container>
        <div className="row d-flex justify-content-center">
          {items.map((item) => (
            <div
              className="col-3 bg-white text-dark mb-4 mx-2 rounded"
              key={item.id}
            >
              <div>
                <button
                  className="float-end bg-transparent border-0"
                  onClick={() => removeItem(item.id)}
                >
                  <DeleteIcon />
                </button>
                <h1 className="w-100 fs-4">{item.nombre}</h1>
                <h2 className="fs-5">Precio: {item.precio}</h2>
                <h2 className="fs-5">Cantidad: {item.quantity}</h2>
                <img className="img-fluid pb-2" src={item.imagen} alt="" />
              </div>
            </div>
          ))}
        </div>
          <div className="col-6 mx-auto mb-5">                
                <form >
                    <div>
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="name" value={buyer.name} onChange={handleChange} required/>
                    </div>
                    <div>
                    <label>Telefono</label>
                    <input
                        type="text"
                        name="telefono"
                        className="form-control"
                        values={buyer.telefono}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        values={buyer.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </form>
                <h2 className="mt-3">Total carrito: ${total}</h2>
                <button className="btn btn-danger mt-3" onClick={handleSendOrder} >Hacer pedido</button>
            </div>            
        <div className="d-flex justify-content-center">
          {items.length == 0 ? (
            <Link to="/">
              <button className="btn-warning btn fw-bolder">
                Ir a la tienda
              </button>
            </Link>
          ) : (
            <button
              className="btn-primary btn mx-auto fw-bolder"
              onClick={limpiarCarrito}
            >
              Limpiar carrito
            </button>
          )}
        </div>
      </Container>
    </>
  );
};

export default ListCart;
