import styles from "./Item.module.css";

const Item = ({ items }) => {
  return (
    <li className={`${styles.kg} `}>
      <span className="kg-span">{items}</span>
    </li>
  );
};

export default Item;
