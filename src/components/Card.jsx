import { useOutletContext } from "react-router";
import {useState} from "react";

function handleBuyClick(itemName, setCartItems) {
    setCartItems(prev => [...prev, itemName]);

}

const Card = ({item}) => {
    const [value, setValue] = useState(0);
    const { setCartItems } = useOutletContext();
    return (
        <>

                <div className="card">
                    <img src={item.img} alt="item-img"/>
                    <p className="item-description">{item.name}</p>
                    <div className="buy-container">
                        <button className="decrement" onClick={() => setValue(v => v - 1)}>-</button>
                        <input type="text" value={value}/>
                        <button className="increment" onClick={() => setValue(v => v + 1)}>+</button>
                        <button className="buy-btn" onClick={() => handleBuyClick(item.name, setCartItems)}>Buy</button>
                    </div>
                </div>

        </>


    )
}

export default Card;