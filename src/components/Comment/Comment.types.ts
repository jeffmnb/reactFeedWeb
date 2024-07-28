export type CommentProps = {
    comment: string;
    onDeleteComment: (commentToDelete: string) => void;
    likeCount: number;
    onLikeComment: () => void;
};
