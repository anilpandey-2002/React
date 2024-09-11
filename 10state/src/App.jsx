import FoodItems from "./comp/FoodItems";
import ErrorMessage from "./comp/ErrorMessage";
import Container from "./comp/Container";
import FoodInput from "./comp/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  // let foodItems = ["dal", "chawal", "roti", "sabzi"];

  // let textStateArr = useState("food entered by user ");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();

  // console.log(`current value : ${textToShow}`);

  // making fooditem state
  let [foodItems, setFoodItems] = useState([]);
  // important
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    // console.log(event.target.value);

    // setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>

        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        {/* <ErrorMessage items={foodItems}></ErrorMessage> */}
        <FoodItems items={foodItems}></FoodItems>
        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
    </>
  );
}

export default App;
