import Item from "./Item";

const FoodItem = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bougth`)}
        />
      ))}
    </ul>
  );
};
export default FoodItem;
