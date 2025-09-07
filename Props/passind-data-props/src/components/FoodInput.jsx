import styles from "./FoodInput.module.css";
const FoodInput = ({hanldleOnChange}) => {

 
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.foodInput}
      onChange={hanldleOnChange}
    />
  );
};

export default FoodInput;
