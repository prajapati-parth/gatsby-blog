import React from "react";
import Link, {navigateTo} from "gatsby-link";
import Helmet from "react-helmet";
import {Calendar} from 'react-feather'

import CommonFunctions from '../utils/functions'
import '../styles/index.css'

export default function Index({ data }) {
  let { edges: posts } = data.allMarkdownRemark
  posts = CommonFunctions.chunkArray(posts, 2)

  return (
    <div className='blogPosts'>
      {
        posts.map(postChunk => {
          return (
            <div className='row'>
              {
                postChunk
                  .filter(post => post.node.frontmatter.title.length > 0)
                  .map(({node: post}) => {
                    return (
                      <div
                        className='col-xs-12 col-sm-6'
                        key={post.id}
                        onClick={() => {navigateTo(post.frontmatter.path)}}>
                        <div className={`blogPostItemContainer blogheader-${post.frontmatter.theme}`}>
                          <div className='blogPostItemHeading'>
                            <h3><strong>{post.frontmatter.title}</strong></h3>
                          </div>

                          <div className='blogPostItemTagNameContainer'>
                            {post.frontmatter.tags.map((tag, index) => {
                              return (
                                <span key={index} className={`badge badge-${post.frontmatter.theme}`}>{tag}</span>
                              )
                            })}
                          </div>

                          <div className='blogPostItemBody'>
                            <span className='hidden-xs'>{post.excerpt}</span>
                          </div>

                          <div className='blogPostItemFooter'>
                            <div className='row'>
                              <div className='col-xs-6'>
                                {/* hidden for xs */}
                                <div className='blogPostItemDateContainer hidden-xs'>
                                  <Calendar size={14} />&nbsp;&nbsp;{post.frontmatter.date}
                                </div>

                                {/* visible for xs */}
                                <div className='blogPostItemDateContainer blogPostItemDateContainer-xs visible-xs'>
                                  <Calendar size={14} />&nbsp;&nbsp;{post.frontmatter.date}
                                </div>
                              </div>

                              <div className='col-xs-6'>
                                <button className={`footerButton footerButton-${post.frontmatter.theme} pull-right`}>
                                  Read more
                                </button>
                              </div>
                            </div>

                            {/* <div className='row visible-xs'>
                              <div className='col-xs-12'>
                                <div className='text-center'>
                                  <div className='blogPostItemDateContainer'>
                                    <Calendar size={14} />&nbsp;&nbsp;&nbsp;{post.frontmatter.date}
                                  </div>
                                </div>
                              </div>
                              <div className='col-xs-12 footerButtonContainer'>
                                <div className='text-center'>
                                <button className={`footerButton footerButton-${post.frontmatter.theme}`}>
                                  Read more
                                </button>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    )
                  }) 
              }
            </div>
          )
        })
      }
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
            tags
            theme
          }
        }
      }
    }
  }
`;