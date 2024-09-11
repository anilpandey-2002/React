import Item from "./Item";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((itm) => (
        <Item key={itm} items={itm}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
