import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'

import './index.css'

const Header = () => (
  <nav className='navbar navbar-default'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <Link className='navbar-brand' to='/'>Brand</Link>
      </div>

      <div className='collapse navbar-collapse'>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/gists/'>Gists</Link>
          </li>
          <li>
            <a href='https://github.com/prajapati-parth' target='_blank'>GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <div className='pageWrapper'>
      <Helmet
        title='My blog'
        meta={[
          { name: 'description', content: 'A technology blog' },
          { name: 'keywords', content: 'JavaScript, React, NPM' },
        ]}>
          <link rel='icon' type='image/x-icon' href='https://assets-cdn.github.com/favicon.ico' />
        </Helmet>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
    <div className='stickyFooterContainer'>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
