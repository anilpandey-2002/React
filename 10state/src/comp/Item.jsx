import styles from "./Item.module.css";

// passing function via a prop
// i.e parent will decide the behavior of the action to be performed  to handle data
// child will only execute the commands
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles.kg} list-group-item ${bought && "active"}`}>
      <span className="kg-span">{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
