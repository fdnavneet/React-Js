import { useState } from "react";
import Item from "./Item";

const FoodItem = ({ item }) => {

  let [activeItems , setActiveItems] = useState([]);

  let onBuyButton = (item,event) => {
    let newItems = [...activeItems,item];
    setActiveItems(newItems);

  }

  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought = {activeItems.includes(item)}
          handleBuyButton={ (event) => onBuyButton(item,event)}
        />
      ))}
    </ul>
  );
};
export default FoodItem;
