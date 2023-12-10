import Item from "./Item";
import {Grid} from "@mui/material";


const ItemList = ({items}) => {
  return (
    <>
        <Grid container spacing={2}>        
            {items.map(item => <Item key={item.id} item={item}/>)}
        </Grid>
    </>
  )
}

export default ItemList
