import React from "react";
import { Link } from "gatsby";
// import "./PostListing.css";
import moment from 'moment';
import siteConfig from "../../../data/SiteConfig";


class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.data.slug,
        tags: postEdge.node.data.tags,
        category: postEdge.node.data.category,
        image: postEdge.node.data.image ? postEdge.node.data.image[0] : null,
        title: postEdge.node.data.title,
        date: siteConfig.dateFormat ? moment(postEdge.node.data.date).format(siteConfig.dateFormat) : postEdge.node.data.date,
        author: postEdge.node.data.author ? postEdge.node.data.author[0].data.name : null,
        postMarkdown: postEdge.node.data.postMarkdown
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <article key={post.title} className="max-w-sm w-full lg:max-w-full lg:flex">
            {/* <div 
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
              style={{
                backgroundImage: 'url(' + post.image + ')',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                width:'100%', 
                height:'15rem' 
                }}>
            </div> */}
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <Link to={post.path} key={post.title}>
                  <h1 className="text-gray-900 font-bold text-xl mb-2">{post.title}</h1>
                </Link>    
                <p className="text-gray-700 text-base">
                  {post.postMarkdown.childMarkdownRemark.excerpt}
                </p>
              </div>   
              <div className="flex items-center">
                {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{post.author}</p>
                  <p className="text-gray-600">{post.postMarkdown.childMarkdownRemark.timeToRead} min</p>
                </div>
              </div>     
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default PostListing;
