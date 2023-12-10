import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import ItemList from "./ItemList";
import Loader from "./Loader";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const rerCollection = id
      ? query(collection(db, "items"), where("categoria", "==", id))
      : collection(db, "items");

    getDocs(rerCollection).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Container>
        {loading ? (
          <Container>
            <Loader />
          </Container>
        ) : (
          <ItemList items={items} />
        )}
      </Container>
    </>
  );
};

export default ItemListContainer;
