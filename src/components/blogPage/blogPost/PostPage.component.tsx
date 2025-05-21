import { useParams } from 'react-router-dom';
import './PostPage.css';
import { Post } from '../BlogPage.utils';
import { fetchBlogPost } from '../BlogPage.service';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const PostPage = () => {
    const { slug } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchBlogPost(slug || "").then(fetchedPost => {
            setPost(fetchedPost);
            setLoading(false);
        });
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post nie znaleziony</div>;


    return (
        <>
            <Helmet>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>
            <section className = "post_hero">
                <h1>{post.title}</h1>
                <p>{[post.createdAt]}</p>
            </section>
            <article>
                
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </>
    )
}