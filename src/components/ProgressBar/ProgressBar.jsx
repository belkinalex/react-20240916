import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

export const ProgressBar = () => {
    const [progressElement, setProgressElement] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            if (progressElement) {
                progressElement.style.width = Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) + '%';
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [progressElement]);

    return (
        <>
            <div ref={setProgressElement} className={styles['progress-bar']} />
        </>
    );
}
