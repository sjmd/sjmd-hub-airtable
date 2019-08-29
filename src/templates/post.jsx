import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Gravatar from 'react-gravatar';
const _ = require("lodash");

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.airtable;
    const post = postNode.data;
    var authorEmail = post.authorEmail;
    var authorName = post.author ? post.author[0].data.name : null;
    var imageUrl = post.image ? post.image[0].url : "";
    var author = post.author ? post.author[0].data : "";
    var shortBio = post.author ? post.author[0].data.shortBio : "";
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category) {
      post.category = config.postDefaultCategoryID;
    }
    return (
      <Layout>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div class="main-wrap flex flex-wrap relative">
            <main className={`Single animateUp w-full md:w-4/5 cat-${_.kebabCase(post.category)}`}>
              <div className="postImage bg-gray-500"
              style={{
                backgroundImage: 'url(' + imageUrl + ')',
                height:'50vh',
                }}>
              </div>
              <div className="postMeta md:absolute text-sm theme-font text-gray-700 uppercase text-right">
                <span className="date">{post.date}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span className="category">{post.category}</span>
              </div>
              
              <section className="postWrap flex flex-wrap">
                <aside className="authorSidebar mt-6 md:mt-10 w-full md:w-1/5 text-sm" role="sidebar">
                  <div className="authorBox relative bg-gray-100 rounded p-4 pt-6">
                    <div className="authorPicName theme-font absolute top-0 flex items-center leading-none">
                      <Gravatar email={authorEmail} size={40} className="rounded mr-2" /> <span className="text-gray-900 mr-2">{authorName}</span>
                    </div>
                    <p class="authorShortBio text-xs leading-tight">
                      {shortBio}
                    </p>
                  </div>
        
                  {/* <p className="text-gray-600">{post.postMarkdown.childMarkdownRemark.timeToRead} min</p> */}
                </aside>   
                <div className="postBody md:w-4/5 md:pl-8">
                  <h1 className="title mt-6 md:mt-8 text-5xl leading-none">{post.title}</h1>
                  <div className="my-6 entry-content max-w-xl" dangerouslySetInnerHTML={{ __html: post.postMarkdown.childMarkdownRemark.html }} />
                  <SocialLinks postPath={slug} postNode={postNode} />
                  {/* <footer className="post-meta">
                    {author && <UserInfo author={author} />}
                    <PostTags tags={post.tags} />
                  </footer> */}
                </div>  
              </section>
              
              <Disqus postNode={postNode} />
            </main>
            <aside className="sidebar animateRight w-full overflow-hidden md:w-1/5" role="sidebar">
            </aside>
          </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $dateFormat: String) {
    airtable(data: {slug: {eq: $slug}}) {
      data {
        title
        category
        tags
        slug
        date(formatString: $dateFormat)
        author {
          data { 
            name
            email
            twitter
            github
            bio
            shortBio
          }
        }
        authorEmail
        postMarkdown {
          childMarkdownRemark {
            html
            excerpt(format: PLAIN)
            timeToRead
          }
        }
        image {
          url
        }
      }
    }
  }
`;
