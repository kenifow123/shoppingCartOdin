import { Link } from "react-router"
import styles from "../styles/App.module.css"
import logo from "../assets/store.jpg"
import { useContext, createContext } from "react";
import { ShopContext } from "../App.jsx"

const Nav = ({getTitle, setTitle, cartItems}) => {

    const {products} = useContext(ShopContext);
    console.log(products);

    function getCartTotal() {
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