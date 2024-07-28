import React from 'react';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from '@phosphor-icons/react';
import { CommentProps } from './Comment.types';

export const Comment: React.FC<CommentProps> = ({
    comment,
    onDeleteComment,
    likeCount,
    onLikeComment,
}) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.user} src="https://github.com/jeffmnb.png" />

            <div className={styles.commentContainer}>
                <div className={styles.commentContent}>
                    <div className={styles.header}>
                        <div>
                            <p className={styles.userName}>Jeferson Borda</p>
                            <p className={styles.job}>Dev FullStack</p>
                        </div>

                        <Trash
                            className={styles.trashIcon}
                            size={'1.375rem'}
                            onClick={() => onDeleteComment(comment)}
                        />
                    </div>

                    <p className={styles.commentItem}>{comment}</p>
                </div>

                <a className={styles.actionButton} onClick={onLikeComment}>
                    <ThumbsUp size={'1.25rem'} />
                    Aplaudir • {likeCount}
                </a>
            </div>
        </div>
    );
};
