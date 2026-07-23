import { Link } from "react-router"
import styles from "../styles/App.module.css"
import logo from "../assets/store.jpg"
const Nav = ({getTitle, setTitle, cartItems}) => {

    function getCartTotal() {
        console.log(cartItems);
        let total = 0;
        cartItems.forEach((item) => {
            total += item.value;
        })

        return total;
    }

    return (
        <nav>
            <div className={styles.logoDiv}>

                <img src={logo} alt="nav-logo"/>
                <h1 id="page-title">{getTitle}</h1>
            </div>
            <div className={styles.links}>
                <Link to="/" onClick={() => setTitle("Home")}>Home</Link>
                <Link to="shop" onClick={() => setTitle("Shop")}>Shop</Link>
                <div className={styles.cartContainer}>
                    <Link to="cart" onClick={() => setTitle("Cart")}>Cart</Link>
                    <p id="cart-total">{getCartTotal()}</p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;