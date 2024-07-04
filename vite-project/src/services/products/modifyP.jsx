import React, { useState, useEffect } from "react";
import axios from "axios";

const modifyP = ({ id }) => {
  const [data, setData] = useState({
    instrument: "",
    brand: "",
    model: "",
    specifics: "",
    price: "",
    imagenUrl: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
};

export default modifyP;
