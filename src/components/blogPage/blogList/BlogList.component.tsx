import { FC, useState } from "react";
import { BlogPostSummary } from "../BlogPage.utils";
import './BlogList.css';
import { Paginator } from "primereact/paginator";

interface BlogListProps {
  posts: BlogPostSummary[];
}

const POSTS_PER_PAGE: number = 6;

export const BlogList: FC<BlogListProps> = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [first, setFirst] = useState(0);

    const startIndex: number = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
        <>
            <section className="blog_posts">
                {currentPosts.map((post) => (
                    <article key={post.id} className="blog_post">
                        <img src={post.coverImageLocation} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <a className="blog_read_more" href={`/blog/${post.slug}`}>Czytaj więcej</a>
                    </article>
                ))}
            </section>
            <Paginator
                first={first}
                rows={POSTS_PER_PAGE}
                totalRecords={posts.length}
                onPageChange={(e) => {
                    setFirst(e.first);
                    setCurrentPage(e.page + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                alwaysShow={false}
            />
        </>
    );
};