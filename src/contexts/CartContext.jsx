import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const limpiarCarrito = () => {
    setItems([]);
  };

  const addItem = (item, quantity) => {
    const exists = items.some(i => i.id === item.id);

    if (exists) {
      const updateItem = items.map(i => {
        if(i.id === item.id){
          return {...i, quantity: i.quantity + quantity};
        }else{
          return i;
        }
      })
      setItems(updateItem);
    } else {      
      setItems((prev) => {
        return [...prev, { ...item, quantity}];
      });
    }

    Swal.fire(item.nombre + " se agrego al carrito");
  };

  const removeItem = (id) => {
    const newItems = items.filter((prev) => prev.id !== id);
    setItems(newItems);
    Swal.fire(id + " se elimino del carrito");
  };

  return (
    <CartContext.Provider
      value={{
        limpiarCarrito,
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
