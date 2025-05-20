import { Helmet } from 'react-helmet-async';
import { METADATA } from '../common/utils/metadata';
import './BlogPage.css';
import { useState, useEffect } from 'react';
import { fetchBlogPostSummaries } from './BlogPage.service';
import { BlogPostSummary } from './BlogPage.utils';
import { BlogList } from './blogList/BlogList.component';
import { Footer } from '../footer/Footer.component';
import { translate } from '../../lang/utils/TranslationUtils';


export const BlogPage = () => {
  const [postsSummaries, setPostsSummaries] = useState<BlogPostSummary[]>([]);

  useEffect(() => {
    fetchBlogPostSummaries().then((data) => {
      setPostsSummaries(data);
    });
  }, []);

  return <>
    <Helmet>
      <title>{METADATA.BLOG_TITLE}</title>
      <meta 
        name = "description" 
        content = {METADATA.BLOG_DESCRIPTION} />
    </Helmet>
    <section className = "blog_hero">
      <h1>{translate("BLOG.TITLE")}</h1>
      <h2>{translate("BLOG.SUBTITLE")}</h2>
    </section>
    <BlogList posts = {postsSummaries} />
    <Footer />
  </>
}