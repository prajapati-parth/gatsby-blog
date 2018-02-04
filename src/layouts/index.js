import React from 'react'
import PropTypes from 'prop-types'
import {navigateTo} from 'gatsby-link'
import Helmet from 'react-helmet'

import Analytics from '../utils/analytics'
import Footer from '../components/Footer'
import Copy from '../utils/appCopy'
import './index.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  headerProfileClick(location) {
    Analytics.trackLinkClick({
      category: 'Header profile',
      action: 'click'
    })
    window.open(location)
  }

  headerLinkClick(location) {
    Analytics.trackLinkClick({
      category: 'Header link',
      action: 'click',
      label: location
    })
    navigateTo(location)
  }

  render() {
    return (
      <div className='headerContainer'>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button'
                className='navbar-toggle collapsed'
                onClick={() => {
                  this.setState({
                    isOpen: !this.state.isOpen
                  })
                }}
              >
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='navbar-brand' onClick={() => {this.headerLinkClick('/')}}>{Copy.blogName}</a>
            </div>
    
            <div className={`collapse navbar-collapse ${this.state.isOpen ? 'in' : ''}`}>
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <a onClick={() => this.headerLinkClick('/about')}>About</a>
                </li>
                <li>
                  <a onClick={() => this.headerLinkClick('/gists')}>Gists</a>
                </li>
                <li>
                  <a onClick={() => this.headerProfileClick('https://github.com/prajapati-parth')}>GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <div className='pageWrapper'>
      <Helmet
        title={Copy.blogName}
        meta={[
          { name: 'description', content: 'A technical blog sharing my experience' },
          { name: 'keywords', content: 'JavaScript, React, Angular, Technology' },
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
