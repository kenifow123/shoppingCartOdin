import {useOutletContext} from "react-router";
import styles from '../styles/App.module.css'

const Cart = () => {
    const { cartItems, setCartItems } = useOutletContext();

    function decrement(name) {
        setCartItems(prev =>
            prev.map(item =>
                item.name === name
                    ? {...item, value: item.value - 1 }
                        : item
            ))
    }

    function increment(name) {
        setCartItems(prev =>
            prev.map(item =>
                item.name === name
                    ? {...item, value: item.value + 1 }
                    : item
            ))
    }

    function deleteItem(curr) {
        setCartItems(prev =>
            prev.filter(item => item.name !== curr.name));
    }

    return (
        <>

            <div className={styles.cardContainer}>
                {cartItems.map((item) => (
                    <div className={styles.card}>
                        <img src={item.image} alt="item-img"/>
                        <p>{item.name} in cart: {item.value}</p>
                        <div className={styles.buyContainer}>
                            <button className="decrement" onClick={() => decrement(item.name)}>-</button>
                            <button className="increment" onClick={() => increment(item.name)}>+</button>
                            <button className="delete" onClick={() => deleteItem(item)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>
            <button>Checkout</button>
        </>
    )
}

export default Cart;