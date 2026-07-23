import Card from './Card'
import { useOutletContext } from "react-router"
import styles from "../styles/App.module.css"


const Shop = () => {
    const { items } = useOutletContext();

    return (
        <>
            <div className={styles.cardContainer}>
                {items.map((item) => (
                    <Card item={item}/>
                ))}
            </div>
        </>
    )
}

export default Shop;