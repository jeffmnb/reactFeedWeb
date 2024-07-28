import React from 'react';
import { Comment } from '../Comment/Comment';
import { Profile } from '../Profile/Profile';
import { usePost } from './Post.logic';
import styles from './Post.module.css';
import { PostProps } from './Post.types';
import { getDateInRelationToNow } from './Post.utils';

export const Post: React.FC<PostProps> = ({ author, content, publishedAt }) => {
    const {
        likeCount,
        newComment,
        allComments,
        setNewComment,
        handlePublish,
        handleLikeComment,
        handleDeleteComment,
    } = usePost();

    return (
        <div className={styles.postContainer}>
            <header className={styles.header}>
                <Profile
                    isHorizontal
                    avatarUrl={author.avatarUrl}
                    job={author.role}
                    userName={author.name}
                />

                <time className={styles.postTime}>
                    {getDateInRelationToNow(publishedAt)}
                </time>
            </header>

            <div className={styles.postContent}>
                {content.map(({ type, content }) => {
                    switch (type) {
                        case 'link':
                            return (
                                <p key={content}>
                                    <a href="#">{content}</a>
                                </p>
                            );
                        default:
                            return <p key={content}>{content}</p>;
                    }
                })}
            </div>

            <div className={styles.feedbackArea}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newComment}
                    onChange={(event) =>
                        setNewComment(event.target.value.trimStart())
                    }
                    className={styles.textarea}
                    placeholder="Escreva um comentário..."
                ></textarea>

                {newComment && (
                    <button onClick={handlePublish} className={styles.button}>
                        Publicar
                    </button>
                )}

                <div className={styles.commentsArea}>
                    {allComments.map((commentItem) => (
                        <Comment
                            comment={commentItem}
                            key={commentItem}
                            onDeleteComment={handleDeleteComment}
                            likeCount={likeCount}
                            onLikeComment={handleLikeComment}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
