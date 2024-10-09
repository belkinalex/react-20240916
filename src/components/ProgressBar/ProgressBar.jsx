import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

export const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setWidth(Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100));
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className={styles['progress-bar']} style={{ width: `${width}%` }}/>
        </>
    );
}
