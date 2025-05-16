import { Helmet } from 'react-helmet-async';
import { METADATA } from '../common/utils/metadata';
import './BlogPage.css';
import { useState, useEffect } from 'react';
import { fetchBlogPostSummaries } from './BlogPage.service';
import { BlogPostSummary } from './BlogPage.utils';


export const BlogPage = () => {
  const [postsSummaries, setPostsSummaries] = useState<BlogPostSummary[]>([]);

  useEffect(() => {
    fetchBlogPostSummaries().then((data) => {
      setPostsSummaries(data);
    });
  }, []);

  return <>
    <Helmet>
      <title>ADD TEXT AND METADATA</title>
      <meta 
        name="description" 
        content={METADATA.ABOUT_DESCRIPTION} />
    </Helmet>
    <section className="blog_hero">
      <h1>Z miłości do rzeczy pięknych i niepowtarzalnych</h1>
      <h2>Blog o sztuce kolekcjonowania i pasji do antyków.</h2>
    </section>
  </>
}