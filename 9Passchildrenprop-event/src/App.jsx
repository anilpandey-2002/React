import FoodItems from "./comp/FoodItems";
import ErrorMessage from "./comp/ErrorMessage";
import Container from "./comp/Container";
import FoodInput from "./comp/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["dal", "chawal", "roti", "sabzi"];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>

        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above is the list of food items</p>
      </Container>
    </>
  );
}

export default App;
