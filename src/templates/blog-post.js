import React from "react";
import Helmet from "react-helmet";
import {navigateTo} from "gatsby-link";
import {Calendar} from 'react-feather'

import '../styles/blog-post.css';

export default function Template({
  data,
}) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <div className={`blogPostContainer blogPostHeader-${post.frontmatter.theme}`}>
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
      {
        (post.frontmatter.previousPath || post.frontmatter.nextPath) && (
          <div>
            <h3>Read more:</h3>
            <div className='footerLinksContainer'>
              <div className='row'>
                {
                  post.frontmatter.previousPath && (
                    <div className='col-xs-6'>
                      <div className={`linkContainer linkContainerHeader-${post.frontmatter.previousTheme}`} onClick={() => {navigateTo(post.frontmatter.previousPath)}}>
                        <div className='row'>
                          <div className='col-xs-12'>
                            <h4>
                              <span>{post.frontmatter.previousTitle}</span>
                            </h4>
                          </div>
                          <div className='col-xs-12'>
                            <button className={`footerButton footerButton-${post.frontmatter.previousTheme} pull-right`}>
                              Read more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                {
                  post.frontmatter.nextPath && (
                    <div className='col-xs-6'>
                      <div className={`linkContainer linkContainerHeader-${post.frontmatter.nextTheme}`} onClick={() => {navigateTo(post.frontmatter.nextPath)}}>
                        <div className='row'>
                          <div className='col-xs-12'>
                            <h4>
                              <span>{post.frontmatter.nextTitle}</span>
                            </h4>
                          </div>
                          <div className='col-xs-12'>
                            <button className={`footerButton footerButton-${post.frontmatter.nextTheme} pull-right`}>
                              Read more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
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
        nextPath
        nextTitle
        nextTheme
        previousPath
        previousTitle
        previousTheme
      }
    }
  }
`
;