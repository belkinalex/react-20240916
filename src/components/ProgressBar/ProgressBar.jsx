import { useRef, useEffect } from 'react';
import ScrollProgress from './scrollProgress.js';
import styles from './ProgressBar.module.css';

export const ProgressBar = () => {
    const progressElement = useRef(null);

    useEffect(() => {
        const progressObserver = new ScrollProgress((x, y) => {
            progressElement.current.style.width = y * 100 + '%';
        });

        return () => progressObserver.destroy();
    }, []);

    return (
        <>
            <div ref={progressElement} className={styles['progress-bar']}></div>
        </>
    );
}
