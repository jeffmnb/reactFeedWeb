import styles from './Header.module.css';
import AppLogo from '../../assets/app-logo.svg';
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img className={styles.icon} src={AppLogo} />
            <h2 className={styles.title}>React Feed</h2>
        </header>
    );
};
