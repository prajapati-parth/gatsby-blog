import React from "react";
import Helmet from "react-helmet";
import {Calendar} from 'react-feather'

import '../styles/blog-post.css';

export default function Template({
  data,
}) {
  const { markdownRemark: post } = data;
  return (
    <div className="blogPostContainer">
      <Helmet title={`My Blog - ${post.frontmatter.title}`} />
      <div className="row blogPost">
        <div className='col-xs-12'>
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div className='col-xs-12'>
          <div className='blogPostBadgeContainer'>
            {
              post.frontmatter.tags.map((tag, index) => {
                return <span key={index} className={`badge badge-${post.frontmatter.theme}`}>{tag}</span>
              })
            }
          </div>
        </div>
        <div className='col-xs-12'>
          <div className='blogPostDateContainer'>
            <Calendar size={14} />&nbsp;&nbsp;{post.frontmatter.date}
          </div>
        </div>
        <div className='col-xs-12'>
          <div
            className="blogPostContent"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        theme
      }
    }
  }
`
;