import { useParams } from 'react-router-dom';
import './PostPage.css';
import { FullPostResponse } from '../BlogPage.utils';
import { fetchBlogPost } from '../BlogPage.service';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import dayjs from 'dayjs';
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/pl";
import { Footer } from '../../footer/Footer.component';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { ErrorPage } from '../../common/errorPage/ErrorPage.component';
import { METADATA } from '../../common/utils/metadata';
import { translate } from '../../../lang/utils/TranslationUtils';

export const PostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState<FullPostResponse | null>(null);
    const [loading, setLoading] = useState(true);

    const AUTHOR: string = translate("BLOG.AUTHOR");

    useEffect(() => {
        setLoading(true);
        fetchBlogPost(slug || "").then(fetchedPost => {
            setPost(fetchedPost);
            setLoading(false);
        });
    }, [slug]);


    const previousPost = post?.previous;
    const nextPost = post?.next;

    if (loading) return <div>Loading...</div>;
    if (!post) {
        return <ErrorPage 
                    errorNumber={404}
                    errorNameCode={"ERROR.404_NAME"}
                    messageCode={"ERROR.404_MESSAGE"} 
                    metaTitle={METADATA.ERROR_404_TITLE} 
                    metaDescription={METADATA.ERROR_404_DESCRIPTION}/>
    }

    dayjs.extend(localizedFormat);
    dayjs.locale("pl");

    const formattedCreationDate: string = dayjs(post.post.createdAt).format("D MMMM YYYY");

    return (
        <>
            <Helmet>
                <title>{post.post.title}</title>
                <meta name="description" content={post.post.excerpt} />
            </Helmet>
            <section className = "post_hero">
                <h1>{post.post.title}</h1>
                <p>{formattedCreationDate}</p>
            </section>
            <article>
                <div className = 'post_content' dangerouslySetInnerHTML={{ __html: post.post.content }} />
                <p className="post_author">
                    {AUTHOR}
                    <span>{post.post.author}</span>    
                </p>
            </article>
            { previousPost || nextPost ? (
                <nav className="post_navigation">
                <button
                    className="nav_button prev"
                    style={{ visibility: previousPost ? 'visible' : 'hidden' }}
                    onClick={() => previousPost && navigate(`/blog/${previousPost.slug}`)}>
                        <IoIosArrowBack className="arrow" />
                        <div className="nav_text prev">
                            <span className="nav_label">POPRZEDNI POST</span>
                            <span className="nav_title">{previousPost?.title ?? ""}</span>
                        </div>
                </button>
                <button
                    className="nav_button next"
                    style={{ visibility: nextPost ? 'visible' : 'hidden' }}
                    onClick={() => nextPost && navigate(`/blog/${nextPost.slug}`)}>
                        <div className="nav_text next">
                            <span className="nav_label">NASTĘPNY POST</span>
                            <span className="nav_title">{nextPost?.title ?? ""}</span>
                        </div>
                        <IoIosArrowForward className="arrow" />
                </button>
            </nav>) : null}
            <Footer />
        </>
    )
}