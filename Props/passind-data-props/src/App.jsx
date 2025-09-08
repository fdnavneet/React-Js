import FoodItem from "./components/FoodItems";
import ErrorMassage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  let [foodItems, setFoosItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoosItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput hanldleKeyDown={onKeyDown}></FoodInput>
        <ErrorMassage item={foodItems} />
        <FoodItem item={foodItems} />
      </Container>
    </>
  );
}

export default App;
