import { BlogPostSummary, mockPostsSummaries } from "./BlogPage.utils"

export const fetchBlogPostSummaries= async (): Promise<BlogPostSummary[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPostsSummaries);
        }, 300); // Optional: simulate network delay
    });
};