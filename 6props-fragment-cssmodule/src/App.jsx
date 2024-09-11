import FoodItems from "./comp/FoodItems";
import ErrorMessage from "./comp/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["dal", "chawal", "roti", "sabzi"];

  return (
    <>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
