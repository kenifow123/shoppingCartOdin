import { useOutletContext } from "react-router";
import {useState} from "react";
import styles from "../styles/App.module.css"


function handleBuyClick(itemName, setCartItems, value, setClicked, itemImage) {

    if (value > 0) {
        setCartItems(prev => {
            const exists = prev.some(item => item.name === itemName);

            if (exists) {
                return prev.map(item =>
                    item.name === itemName ?
                        {...item, value: item.value + value}
                        : item
                )
            }
            return [...prev, { name: itemName, value: value, image:itemImage }];
        });


        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 3000);
    }



}

const Card = ({item}) => {
    const [clicked, setClicked] = useState(false);

    const [value, setValue] = useState(0);
    const { setCartItems } = useOutletContext();
    return (
        <>

                <div className={styles.card}>
                    <img src={item.image} alt="item-img"/>
                    <p className="item-description">{item.name}</p>
                    <div className={styles.buyContainer}>
                        <button className="decrement" onClick={() => setValue(v => v - 1)}>-</button>
                        <input type="text" value={value}/>
                        <button className="increment" onClick={() => setValue(v => v + 1)}>+</button>
                        <button id="add-btn" className={`${styles.button} ${clicked ? styles.clicked : ""}`} onClick={() => handleBuyClick(item.name, setCartItems, value, setClicked, item.image)}>Add to Cart</button>
                    </div>
                </div>

        </>


    )
}

export default Card;