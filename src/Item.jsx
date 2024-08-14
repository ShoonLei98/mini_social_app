import PropTypes from 'prop-types';

export default function Item({item, remove}) {
  console.log("item:::",item);
  
  return (
    <li style={{ padding: 10, borderBottom: "1px solid #ddd", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <span>{item.content} - <b>{item.name}</b></span>
      <button onClick={() => remove(item.id)}>Delete</button>
    </li>
  ); 
}
Item.propTypes = {
  item : PropTypes.object,
  remove : PropTypes.func,
};