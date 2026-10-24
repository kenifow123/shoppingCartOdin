import { useState, createContext } from 'react'
import styles from './styles/App.module.css'
import Nav from './components/Nav.jsx';
import { Outlet } from "react-router"
import useApi from "./components/useApi.jsx";

export const ShopContext = createContext({
    products: [],
    cartItems: [],
    addToCart: () => {},
});


function App() {

    const [title, setTitle] = useState('Home');
    const [items, setItems] = useState([]);
    useApi(setItems);
    // const [items, setItems] = useState([{
    //         name: data[0].title,
    //         img: data[0].image},
    //     {
    //         name: data[1].title,
    //         img: data[1].image,
    //     }]);

    const products = [{name: 'aa', quantity: 1}];
    const addToCart = (products) => {
        console.log(products);
    }

    const [cartItems, setCartItems] = useState([]);
  return (
    <>
        <ShopContext value={{products, cartItems, addToCart}}>
            <Nav className={styles.nav} setTitle={setTitle} getTitle={title} cartItems={cartItems}/>
            <Outlet context={{items, setCartItems, cartItems}}/>
        </ShopContext>
    </>
  )
}

export default App;
