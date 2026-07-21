import Card from './Card'
import { useOutletContext } from "react-router"

const Shop = () => {
    const { items } = useOutletContext();

    return (
        <>
            <h1>Shop</h1>
            <div className="card-container">
                {items.map((item) => (
                    <Card item={item}/>
                ))}
            </div>
        </>
    )
}

export default Shop;