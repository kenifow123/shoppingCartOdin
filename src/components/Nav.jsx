import { Link } from "react-router"
const Nav = ({getTitle, setTitle}) => {

    return (
        <nav>
            <h1>{getTitle}</h1>
            <div className="links">
                <Link to="/" onClick={() => setTitle("Home")}>Home</Link>
                <Link to="shop" onClick={() => setTitle("Shop")}>Shop</Link>
                <Link to="cart" onClick={() => setTitle("Cart")}>Cart</Link>
            </div>
        </nav>
    )
}

export default Nav;