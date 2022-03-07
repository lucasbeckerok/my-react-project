import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return (
      <>
      <h2>Productos</h2>
      <div id="itemStoreContainer">
        <ItemList/>
      </div>
      </>
  )
}

export default ItemListContainer;