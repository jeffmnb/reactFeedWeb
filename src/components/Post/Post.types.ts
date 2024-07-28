export type PostProps = {
    id?: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
};

type Author = {
    avatarUrl: string;
    name: string;
    role: string;
};

type Content = {
    type: 'paragraph' | 'link';
    content: string;
};
