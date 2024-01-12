import styles from "./ProductsList.module.css";

const ProductsList = (props) => {
  return (
    <ul className={styles.list}>
      {props?.Products?.length > 0
        ? props?.Products?.map((f) => {
            return (
              <li key={f.id}>
                {f.name}
                {"––––"}
                {f.price}
                <button onClick={props.deleteHandler.bind(null, f.id)}>
                  ❌
                </button>
              </li>
            );
          })
        : ""}
    </ul>
  );
};

export default ProductsList;
