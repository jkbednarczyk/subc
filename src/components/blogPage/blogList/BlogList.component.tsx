import { FC, useState } from "react";
import { BlogPostSummary } from "../BlogPage.utils";
import './BlogList.css';
import { Paginator } from "primereact/paginator";
import { translate } from "../../../lang/utils/TranslationUtils";

interface BlogListProps {
  posts: BlogPostSummary[];
}

const POSTS_PER_PAGE: number = 6;

export const BlogList: FC<BlogListProps> = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [first, setFirst] = useState(0);

    const startIndex: number = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const READ_MORE: string = translate("BLOG.READ_MORE");

    return (
        <>
            <section className="blog__posts">
                {currentPosts.map((post) => (
                    <article key={post.id} className="blog__post">
                        <img src={post.coverImageLocation} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <a className="blog__read-more" href={`/blog/${post.slug}`}>{READ_MORE}</a>
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