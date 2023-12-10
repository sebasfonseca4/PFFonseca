import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link, Box } from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect (()=>{
    const db = getFirestore();
    const rerCollection = (collection(db, "items"));
    getDocs(rerCollection).then((snapshot)=>{
      const uniqueCategories = [...new Set(snapshot.docs.map((doc) => doc.data().categoria))]; 
      setCategories(uniqueCategories);
    });
  },[]); 

  return (
    <>
      <Container
        sx={{
          pt: 5,
          pb: 2,
          mb: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={2}>
            <NavLink to="/" className="text-decoration-none text-white">
              <h2 >FC Game Store</h2>
            </NavLink>
          </Grid>
          <Grid item xs={8}>
            <nav>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              > 
                {categories.map(category => 
                <NavLink to={`/category/${category}`} key={category}
                >
                  <Link variant="body2"
                  sx={{
                    color: "error.main",
                    fontWeight: "bold",
                    fontSize: 16,
                    mx: 5,
                  }}>
                    {category}                  
                  </Link>
                </NavLink>
                )}
              </Box>
            </nav>
          </Grid>
          <Grid item xs={2}>
            <CartWidget />
          </Grid>
        </Grid>
        <hr></hr>
      </Container>
    </>
  );
};

export default NavBar;
