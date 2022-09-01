import Items from '../components/Items.jsx';

  <div>
    <Items/>
  </div>

const ItemListContainer = (props) => {
    return (
      <div>
        <p>{props.saludo}</p>
      </div>
    );
  }
  
  export default ItemListContainer;