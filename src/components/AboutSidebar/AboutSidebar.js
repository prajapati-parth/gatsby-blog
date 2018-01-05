import React from 'react'
import Link from 'gatsby-link'
import {MapPin, Github, Linkedin, Twitter, Mail} from 'react-feather'

import './styles.css'

const AboutSidebar = () => (
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
              <a onClick={() => {
                window.location = 'https://github.com/prajapati-parth'
              }}>@prajapati-parth</a>
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
              <a onClick={() => {
                window.location = 'https://github.com/prajapati-parth'
              }}>
                <Github size={22} />&nbsp;&nbsp;<strong>GitHub</strong>
              </a>
            </p>
          </div>

          <div className='col-xs-12 col-sm-12 col-md-6'>
            <p className='profileLink profileLink-linkedin'>
              <a onClick={() => {
                window.location = 'https://www.linkedin.com/in/prajapatiparth'
              }}>
                <Linkedin size={22} />&nbsp;&nbsp;<strong>LinkedIn</strong>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className='col-xs-6 col-sm-12'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6'>
            <p className='profileLink profileLink-twitter'>
              <a onClick={() => {
                window.location = 'https://twitter.com/iam_daparth'
              }}>
                <Twitter size={22} />&nbsp;&nbsp;<strong>Twitter</strong>
              </a>
            </p>
          </div>

          <div className='col-xs-12 col-sm-12 col-md-6'>
            <p className='profileLink profileLink-email'>
              <a onClick={() => {
                window.location = 'mailto:parth17prajapati@gmail.com'
              }}>
                <Mail size={22} />&nbsp;&nbsp;<strong>Email</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AboutSidebar