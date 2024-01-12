import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ProductsList from "./components/UI/Productslist/ProductsList";
import Form from "./components/UI/Form/Form";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [Products, setProducts] = useState([]);
  const openFormHandler = (setInputValue) => {
    setOpenForm(!openForm);
    if (setInputValue) {
      setInputValue("");
    }
  };
  useEffect(() => {
    if (Products.length === 0) {
      const storageProducts = JSON.parse(localStorage.getItem("Products"));
      setProducts(storageProducts);
    }
  }, []);

  const deleteHandler = (id) => {
    setProducts((prevF) => {
      const value = prevF.filter((f) => f.id !== id);
      localStorage.setItem("Products", JSON.stringify(value));
      return value;
    });
  };
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <ProductsList Products={Products} deleteHandler={deleteHandler} />
      {openForm && <Form setProducts={setProducts} openHandler={setOpenForm} />}

      <button
        onClick={openFormHandler.bind(null, false)}
        className={styles.btn}
      >
        {openForm ? "cancel" : "New Product +"}
      </button>
    </div>
  );
}

export default App;
