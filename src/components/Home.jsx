import logo from "../assets/store.jpg"
import styles from '../styles/App.module.css'

const Home = () => {
    return (
        <div className={styles.homeDiv}>
            <img src={logo} alt="homepage logo"/>
            <h1>Welcome to the shopping home page</h1>
        </div>


    )
}

export default Home;