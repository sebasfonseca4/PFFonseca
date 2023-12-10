import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { CartContext } from "../contexts/CartContext";
import Loader  from "./Loader";

import { getFirestore, getDoc, doc} from "firebase/firestore";
import ItemCounter from "./ItemCounter";

const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect (()=>{
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc).then((snapshot)=>{
      setItem( { id: snapshot.id,...snapshot.data() });
      setLoading(false)
    });
  },[id]); 

  const add =  (quantity) => {
    addItem(item, quantity);
  };

  return (
    <>
      {loading ? (
        <>
        <Container>
            <Loader />
        </Container>
        </>
      ) : (
        <Container>
          <div className="row">
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={item.imagen} alt="" />
            </div>
            <div className="col-12 col-md-6">
              <h1>{item.nombre}</h1>
              <p className="mb-1">Fecha de lanzamiento: {item.lanzamiento}</p>
              <h3>Precio: {item.precio}</h3>
              <h3>Unidades: {item.stock} Uds</h3>
              <ItemCounter valueInitial={1} stock={item.stock} addItem={add}/>              
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default ItemDetailsContainer;
