import React from 'react';
import styles from './Profile.module.css';
import { ProfileProps } from './Profile.types';

export const Profile: React.FC<ProfileProps> = ({
    isHorizontal,
    avatarUrl,
    userName,
    job,
}) => {
    return (
        <div
            className={
                isHorizontal
                    ? styles.profileContainerHorizontal
                    : styles.profileContainer
            }
        >
            <img className={styles.profile} src={avatarUrl} />

            <div
                className={
                    isHorizontal
                        ? styles.infoContainerHorizontal
                        : styles.infoContainer
                }
            >
                <p className={styles.userName}>{userName}</p>
                <p className={styles.job}>{job}</p>
            </div>
        </div>
    );
};
