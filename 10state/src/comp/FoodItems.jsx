import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  // let onBuyButton = (item, event) => {
  //   let newItems = { ...activeItems, item };
  //   SetActiveItems(newItems);
  // };
  const onBuyButton = (item) => {
    let newItems;
    if (activeItems.includes(item)) {
      newItems = activeItems.filter((i) => i !== item);
    } else {
      newItems = [...activeItems, item];
    }
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
