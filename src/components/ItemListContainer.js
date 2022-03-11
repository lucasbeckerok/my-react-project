import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
      <>
      <h2>Productos</h2>
      <div id="itemStoreContainer" className="cards">
        <ItemList/>
      </div>
      </>
  )
}

export default ItemListContainer;