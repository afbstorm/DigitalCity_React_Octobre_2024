import styles from './Welcome.module.css';
// import './Welcome.css';

const Welcome = ({name, age = 18}) => {

    console.log(name)

    return (
        <>
            <p className={styles.p1}>Bienvenue {name}</p>
            <p className={styles.p2}>Vous avez {age} ans</p>
        </>
    )
}

export default Welcome;