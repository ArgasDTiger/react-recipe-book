import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header>
            <div className={styles.pageNames}>
                <button className={styles.pageName}>
                    Home
                </button>
                <button className={styles.pageName}>
                    Recipes
                </button>
                <button className={styles.pageName}>
                    Ingredients
                </button>
            </div>
            <div className={styles.authButtons}>
                <button>Login</button>
                <button>Register</button>
            </div>
        </header>
    );
}