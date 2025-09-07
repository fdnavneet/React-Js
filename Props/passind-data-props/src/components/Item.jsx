
const Item = (props) => {
  return (
    <li className="list-group-item kg-item">
      <span className="item">{props.foodItem}</span>
    </li>
  );
};
export default Item;
