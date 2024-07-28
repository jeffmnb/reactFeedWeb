import { Profile } from '../Profile/Profile';
import styles from './SideBar.module.css';
import { PencilLine } from '@phosphor-icons/react';
import { SideBarProps } from './SideBar.types';
import React from 'react';

export const SideBar: React.FC<SideBarProps> = ({ avatarUrl, role, name }) => {
    return (
        <div className={styles.aside}>
            <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profileContainer}>
                <Profile
                    isHorizontal={false}
                    avatarUrl={avatarUrl}
                    job={role}
                    userName={name}
                />
            </div>

            <footer className={styles.footer}>
                <button className={styles.editButton}>
                    <PencilLine size={'0.9375rem'} />
                    Editar perfil
                </button>
            </footer>
        </div>
    );
};
