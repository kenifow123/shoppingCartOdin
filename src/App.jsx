import { useState } from 'react'
import styles from './styles/App.module.css'
import Nav from './components/Nav.jsx';
import { Outlet } from "react-router"
import useApi from "./components/useApi.jsx";


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

    const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Nav className={styles.nav} setTitle={setTitle} getTitle={title} cartItems={cartItems}/>
      <Outlet context={{items, setCartItems, cartItems}}/>
    </>
  )
}

export default App;
