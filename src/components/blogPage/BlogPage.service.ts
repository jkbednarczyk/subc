import { BlogPostSummary, FullPostResponse, mockFullPost, mockPostsSummaries} from "./BlogPage.utils"

export const fetchBlogPostSummaries= async (): Promise<BlogPostSummary[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPostsSummaries);
        }, 300); // Optional: simulate network delay
    });
};

export const fetchBlogPost = async (slug: string): Promise<FullPostResponse | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = mockFullPost.find((post) => post.post.slug === slug);
            resolve(post || null);
        }, 300); // Optional: simulate network delay
    });
};