import styles from "./FruitsList.module.css";

const FruitsList = (props) => {
  return (
    <ul className={styles.list}>
      {props?.fruits?.length > 0
        ? props?.fruits?.map((f) => {
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

export default FruitsList;
