
const Item = ({foodItem , handleBuyButton}) => {
  
  return (
    <li className="list-group-item kg-item">
      <span className="item">{foodItem}</span>
      <button className="button btn btn-info"
      onClick={ handleBuyButton}
      >BUy</button>
    </li>
    
  );
};
export default Item;
