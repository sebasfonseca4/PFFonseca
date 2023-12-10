import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailsContainer from "./components/ItemDetailsContainer";
import ListCart from "./components/ListCart";
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/category/:id" element={ <ItemListContainer /> }/>
            <Route path="/item/:id" element={ <ItemDetailsContainer /> }/>
            <Route path="/cart" element={ <ListCart /> }/>
            <Route path="*" element={ <> <div className="container">404</div> </> }/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
