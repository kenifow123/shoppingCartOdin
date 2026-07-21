import App from '../App.jsx';
import Nav from './Nav.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './Home.jsx';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { element: <Home />, index: true },
            { path: "shop", element: <Shop /> },
            { path: "cart", element: <Cart /> }

]
    }
]

export default routes;