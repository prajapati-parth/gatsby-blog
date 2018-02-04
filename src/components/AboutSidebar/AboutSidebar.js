import React from 'react'
import Link from 'gatsby-link'
import {MapPin, Github, Linkedin, Twitter, Mail} from 'react-feather'

import Analytics from '../../utils/analytics'
import './styles.css'

const AboutSidebar = () => {
  const linkClick = (location, label) => {
    Analytics.trackLinkClick({
      category: 'About page link',
      action: 'click',
      label: label
    })
    window.open(location)
  }
  
  return (
    <div className='aboutContainer'>
      <div className='row'>
        <div className='col-xs-12'>
          <div className='profileImageContainer'>
            <img src='https://avatars6.githubusercontent.com/u/17194534' alt='profile image' rounded/>
          </div>
        </div>

        <div className='col-xs-12'>
          <div className='nameContainer'>
            <p className='name'>Parth Prajapti</p>
            <p className='githubHandle'>
              <a onClick={() => linkClick('https://github.com/prajapati-parth', 'About - Profile - Sidebar handle')}>@prajapati-parth</a>
            </p>
          </div>
        </div>

        <div className='col-xs-12'>
          <div className='bioContainer'>
              <p>Curiously building a rocket, underwater!</p>
          </div>
        </div>
      </div>

      <div className='row locationContainer'>
        <div className='col-xs-12'>
          <p className='location'>
            <MapPin size={22} />&nbsp;&nbsp;Ahmedabad City, India
          </p>
        </div>
      </div>

      <div className='row profileLinkContainer'>
        <div className='col-xs-6 col-sm-12'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-6'>
              <p className='profileLink profileLink-github'>
                <a onClick={() => { linkClick('https://github.com/prajapati-parth', 'About - Profile - Sidebar social links')}}>
                  <Github size={22} />&nbsp;&nbsp;GitHub
                </a>
              </p>
            </div>

            <div className='col-xs-12 col-sm-12 col-md-6'>
              <p className='profileLink profileLink-linkedin'>
                <a onClick={() => { linkClick('https://www.linkedin.com/in/prajapatiparth', 'About - LinkedIn - Sidebar social links')}}>
                  <Linkedin size={22} />&nbsp;&nbsp;LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='col-xs-6 col-sm-12'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-6'>
              <p className='profileLink profileLink-twitter'>
                <a onClick={() => { linkClick('https://twitter.com/iam_daparth', 'About - Twitter - Sidebar social links')}}>
                  <Twitter size={22} />&nbsp;&nbsp;Twitter
                </a>
              </p>
            </div>

            <div className='col-xs-12 col-sm-12 col-md-6'>
              <p className='profileLink profileLink-email'>
                <a onClick={() => { linkClick('mailto:parth17prajapati@gmail.com', 'About - Mail - Sidebar social links')}}>
                  <Mail size={22} />&nbsp;&nbsp;Email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSidebar