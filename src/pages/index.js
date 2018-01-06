import React from "react";
import Link, {navigateTo} from "gatsby-link";
import Helmet from "react-helmet";
import {Calendar} from 'react-feather'

import '../styles/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blogPosts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blogPostItem" key={post.id}>
              <div className='panel panel-default' onClick={() => {navigateTo(post.frontmatter.path)}}>
                <div className='panel-heading'>
                  <h2 className='panel-title'>
                    <strong>{post.frontmatter.title}</strong>
                  </h2>
                </div>
                <div className='panel-body'>
                  <span className='panelBody'>
                    {post.excerpt}
                  </span>
                </div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-xs-12 col-md-8">
                      <Calendar size={14} />&nbsp;&nbsp;&nbsp;{post.frontmatter.date}
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <span className="blogReadMore pull-right">
                        <Link to={post.frontmatter.path}>Read more...</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;