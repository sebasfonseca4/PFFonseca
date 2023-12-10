import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
  
  const { items } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <Badge badgeContent={items.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
