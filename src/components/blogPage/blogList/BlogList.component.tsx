import { FC } from "react";
import { BlogPostSummary } from "../BlogPage.utils";
import './BlogList.css';

interface BlogListProps {
  posts: BlogPostSummary[];
}

export const BlogList: FC<BlogListProps> = ({ posts }) => {
    return (
        <>
            <section className="blog_posts">
                {posts.map((post) => (
                    <article key={post.id} className="blog_post">
                        <img src={post.coverImageLocation} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <a href={`/blog/${post.slug}`}>Czytaj więcej</a>
                    </article>
                ))}
      </section>
        </>
    );
};