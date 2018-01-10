import React from "react";
import Helmet from "react-helmet";
import {Calendar} from 'react-feather'

import '../styles/blog-post.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blogPostContainer">
      <Helmet title={`My Blog - ${post.frontmatter.title}`} />
      <div className="blogPost">
        <h1>{post.frontmatter.title}</h1>
        <div className="blogPostInfoContainer">
          <span className="blogPostDate">
            <Calendar size={14} />&nbsp;&nbsp;&nbsp;{post.frontmatter.date}
          </span>
        </div>
        <br />
        <div
          className="blogPostContent"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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