import React from 'react'
import {Code, Heart} from 'react-feather'

import Analytics from '../../utils/analytics'
import './styles.css'

const Footer = () => {
  const footerProfileLinkClicked = (location) => {
    Analytics.trackLinkClick({
      category: 'Footer profile',
      action: 'click'
    })
    window.open(location)
  }
  
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='footerText'>
              <Code size={22} />&nbsp;with&nbsp;<Heart size={22} />&nbsp;using&nbsp;<span className='footerBold'>React</span>&nbsp;&&nbsp;<span className='footerBold'>Gatsby</span>&nbsp;by&nbsp;<a className='footerBold' onClick={() => {footerProfileLinkClicked('https://github.com/prajapati-parth')}}>prajapati-parth</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer