import { useRef, useEffect } from 'react';
import styles from './ProgressBar.module.css';

export const ProgressBar = () => {
    const progressElement = useRef(null);

    useEffect(() => {
        const onScroll = () => progressElement.current.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div ref={progressElement} className={styles['progress-bar']} />
        </>
    );
}
