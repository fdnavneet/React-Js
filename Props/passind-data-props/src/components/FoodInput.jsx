import styles from "./FoodInput.module.css";
const FoodInput = ({hanldleKeyDown}) => {

 
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.foodInput}
      onKeyDown={hanldleKeyDown}
    />
  );
};

export default FoodInput;
