import Item from "./Item"

const ItemList = (props) => {

    return (
        <>
            {props.products.map((product, id) => {
                return <Item key={id} name={product.name} price={product.price} stock={product.stock} img={product.img} descripcion={product.descripcion} />
            })}
        </>
    )
}

export default ItemList;
