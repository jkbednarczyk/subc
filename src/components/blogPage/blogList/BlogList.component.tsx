import { FC, useState } from "react";
import { BlogPostSummary } from "../BlogPage.utils";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './BlogList.css';

interface BlogListProps {
  posts: BlogPostSummary[];
}

const POSTS_PER_PAGE: number = 2;

export const BlogList: FC<BlogListProps> = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages:number = Math.ceil(posts.length / POSTS_PER_PAGE);

    const startIndex: number = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <FaChevronLeft />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}>
                            {index + 1}
                    </button>
            ))}

                <button 
                    onClick={() => handlePageChange(currentPage + 1)}  
                    disabled={currentPage === totalPages}>
                        <FaChevronRight />
                </button>
            </div>
        </>
    );
};