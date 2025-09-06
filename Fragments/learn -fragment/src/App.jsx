import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItem = [" dal", "Gren veg", "Roti", "salad", " Milk","mutton"];
  let foodItem = []
   
  // if else metod
  // if(foodItem.length === 0){
  //   return<h3>I am still hungry</h3>
  // }


  return (
    <>
      <h1>Healthy Foods</h1>

      {/* ternury operator */}
      {/* {foodItem.length === 0 ? <h3>I am still hungry</h3> :null } */}

      {/* logical opertaor */}
      {foodItem.length === 0 && <h3>I am still hungry</h3>}


      <ul className="list-group">
        {foodItem.map((item) => (
          <li key = {item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
