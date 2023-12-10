import { Link } from "react-router-dom";

import {
  Box,
  CardActions,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const Item = ({ item }) => {
  return (
    <>
      <Grid columns={{ xs: 4, sm: 8, md: 12 }} className="m-2">
        <Box sx={{ color: "error.main" }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                sx={{ height: 140 }}
                image={item.imagen}
                title="green iguana"
              />
              <Typography variant="h5" component="div">
                {item.nombre}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Fecha de lanzamiento: {item.lanzamiento}
              </Typography>
              <Typography variant="body2">
                Precio: {item.precio}
              </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/item/${item.id}`}>
                    <button size="small" className="btn btn-primary">Ver detalle</button>
                </Link>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default Item;
