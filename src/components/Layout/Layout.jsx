import styles from './Layout.module.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const Layout = ({ children }) => {

    return (
        <div>
            <ProgressBar/>
            <header className={styles.header}>
                Header
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    );
}
