import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { SideBar } from '../../components/SideBar/SideBar';
import styles from './Feed.module.css';
import { postsMocked } from '../../services/posts.mock';
import { userDetails } from '../../services/user.mock';

export const Feed: React.FC = () => {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <SideBar
                    avatarUrl={userDetails.avatarUrl}
                    name={userDetails.name}
                    role={userDetails.job}
                />

                <main className={styles.main}>
                    {postsMocked.map(({ author, content, id, publishedAt }) => {
                        return (
                            <Post
                                key={id}
                                author={author}
                                content={content}
                                publishedAt={publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </>
    );
};
