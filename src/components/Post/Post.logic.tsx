import { useState } from 'react';

export const usePost = () => {
    const [newComment, setNewComment] = useState<string>('');
    const [allComments, setAllComments] = useState<string[]>(['']);
    const [likeCount, setLikeCount] = useState<number>(0);

    const handlePublish = () => {
        setAllComments([...allComments, newComment]);
        setNewComment('');
    };

    const handleDeleteComment = (commentToDelete: string) => {
        setAllComments([
            ...allComments.filter((comment) => comment !== commentToDelete),
        ]);
    };

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1);
    };

    return {
        newComment,
        allComments,
        likeCount,
        handlePublish,
        setNewComment,
        handleLikeComment,
        handleDeleteComment,
    };
};
