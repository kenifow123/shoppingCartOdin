import { useState } from 'react'
import './styles/App.module.css'
import Nav from './components/Nav.jsx';
import { Outlet } from "react-router"


function App() {
    const [title, setTitle] = useState('Home');
    const [items, setItems] = useState([{
            name: "computer",
            img: "./assets/computer.jpg"},
        {
            name: "pen",
            img: "./assets/pen.png",
        }]);

    const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Nav setTitle={setTitle} getTitle={title}/>
      <Outlet context={{items, setCartItems, cartItems}}/>
    </>
  )
}

export default App;
