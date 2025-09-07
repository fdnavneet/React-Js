import FoodItem from "./components/FoodItems";
import ErrorMassage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItem = [" dal", "Gren veg", "Roti", "salad", " Milk", "mutton"];
  // let foodItem = []

  // if else metod
  // if(foodItem.length === 0){
  //   return<h3>I am still hungry</h3>
  // }

   const hanldleOnChange = (event) => {
   console.log(event.target.value)
  }

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>

      {/* ternury operator */}
      {/* {foodItem.length === 0 ? <h3>I am still hungry</h3> :null } */}

      {/* logical opertaor */}
      {/* {foodItem.length === 0 && <h3>I am still hungry</h3>} */}

      <ErrorMassage item={foodItem} />

      <FoodInput hanldleOnChange = {hanldleOnChange}></FoodInput>

      <FoodItem item={foodItem} />
    </Container>

    {/* <Container>
      <p>Above is the list healthy food</p>
    </Container> */}
    </>
  );
}

export default App;
