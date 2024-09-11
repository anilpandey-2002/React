import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {

  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="enter food"
      className={styles.foodInput}
      onChange={handleOnChange}
    ></input>
  );
};
export default FoodInput;
