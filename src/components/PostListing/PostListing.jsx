import React from "react";
import { Link } from "gatsby";
import moment from 'moment';
import siteConfig from "../../../data/SiteConfig";
import Gravatar from 'react-gravatar';


class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.data.slug,
        tags: postEdge.node.data.tags,
        category: postEdge.node.data.category,
        image: postEdge.node.data.image ? postEdge.node.data.image[0] : null,
        image_url: postEdge.node.data.image ? postEdge.node.data.image[0].url : null,
        title: postEdge.node.data.title,
        date: siteConfig.dateFormat ? moment(postEdge.node.data.date).format(siteConfig.dateFormat) : postEdge.node.data.date,
        author: postEdge.node.data.author ? postEdge.node.data.author[0].data.name : null,
        authorEmail: postEdge.node.data.authorEmail,
        postMarkdown: postEdge.node.data.postMarkdown
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <section className="postListing flex flex-wrap justify-center align-center content-center">
        {/* Your post list here. */
        postList.map(post => (
          <article key={post.title} className={`post m-4 flex flex-col items-stretch relative rounded cat-${post.category} ${post.tags}`}>
            <div className="postCat theme-font text-sm text-gray-700 uppercase tracking-wide flex items-center">
              {post.category}
            </div>
            <div className="postImage" style={{ backgroundImage: 'url(' + post.image_url + ')',}}></div>
    
            <div className="flex flex-col mb-4">
                <h2 className="leading-none my-4 mr-2 text-3xl">{post.title}</h2>
                <p className="postExcerpt text-gray-900 mr-2 text-sm">
                  {post.postMarkdown.childMarkdownRemark.excerpt}
                </p>
            </div>
            <div className="postAuthor absolute bottom-0 flex items-center text-sm leading-none">
              <div className="mr-2">
              <Gravatar email={post.authorEmail} size={40} className="rounded" />
              </div>
              <p className="text-gray-900 mr-2">{post.author}</p>
              {/* <p className="text-gray-600">{post.postMarkdown.childMarkdownRemark.timeToRead} min</p> */}
            </div>     
            <div className="postDate theme-font text-sm text-gray-700 uppercase tracking-wide flex items-center">
              {post.date}
            </div>
            <Link className="absolute top-0 right-0 left-0 bottom-0" to={post.path} key={post.title}></Link>    
          </article>
        ))}
      </section>
    );
  }
}

export default PostListing;
