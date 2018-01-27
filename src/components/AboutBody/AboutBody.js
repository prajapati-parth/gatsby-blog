import React from 'react'
import Link from 'gatsby-link'

import CommonFunctions from '../../utils/functions'
import './styles.css'

const AboutBody = () => {
  const aboutTitle = <h3 className='panel-title'><strong>About</strong></h3>,
    sideProjectsTitle = <h3 className='panel-title'><strong>Side projects I'm currently on</strong></h3>,
    skillsTitle = <h3 className='panel-title'><strong>Skills</strong></h3>

  return (
    <div>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          {aboutTitle}
        </div>
        <div className='panel-body'>
          <span className='panelBody'>
            I'm Parth Prajapati, from Ahmedabad, India. Currently working&nbsp;
            <a href='http://incapsulate.com/' target='_blank'>@Incapsulate</a>&nbsp;
            as an Associate Consultant and specialize in Fullstack web development and graphic designing.
            <br /><br />
            With an experience of { CommonFunctions.getExperience() } years in architecting, designing and developing solutions for growing bussiness needs,
            I am focused on implementing advanced technologies and tools that enable me to build a magnitude of powerful apps in a quick and efficient manner.
            I've great inclination towards learning new tech and studying different architectures and am constantly working on brushing my skills.
            <br /><br />
            At the begining of my career, I got the opportunity to work throughout the stack creating robust web appliction using jQuery, C# and MSSQL,
            along with Facebook application using AngularJS and desktop application using InstallJammer. Later with tech evolution, I shifted my focus on to React, Angular, Node, Python and Electron.
            <br /><br />
            I'm looking for challenges that can provide me opportunity to move out of my comfort zone and to create something extra ordinary.
          </span>
        </div>
      </div>

      <div className='panel panel-default'>
        <div className='panel-heading'>
          {skillsTitle}
        </div>
        <div className='panel-body'>
          <span className='panelBody'>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Domain
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>Web</span><span className='label label-default'>Mobile</span><span className='label label-default'>Desktop</span>
                <span className='label label-default'>Release management</span>
                <span className='label label-default'>Project architecture</span>
              </div>
            </div>
            <hr className='skillsSeparator'/>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Languages
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>JavaScript</span><span className='label label-default'>Python</span>
                <span className='label label-default'>PHP</span><span className='label label-default'>C#</span>
              </div>
            </div>
            <hr className='skillsSeparator'/>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Frontend
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>React</span><span className='label label-default'>Angular</span><span className='label label-default'>AngularJS</span>
                <span className='label label-default'>jQuery</span><span className='label label-default'>Bootstrap</span>
                <span className='label label-default'>Responsive design</span>
              </div>
            </div>
            <hr className='skillsSeparator'/>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Mobile
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>React Native</span>
              </div>
            </div>
            <hr className='skillsSeparator'/>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Desktop
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>Electron</span><span className='label label-default'>InstallJammer</span>
              </div>
            </div>
            <hr className='skillsSeparator'/>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Backend
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>Python</span><span className='label label-default'>Node</span>
                <span className='label label-default'>PHP</span><span className='label label-default'>C#</span>
              </div>
            </div>
            <hr className='skillsSeparator'/>
            <div className='row skillsRow'>
              <div className='col-xs-3 col-sm-3'>
                Database
              </div>
              <div className='col-xs-9 col-sm-9'>
                <span className='label label-default'>MySQL</span><span className='label label-default'>MSSQL</span>
                <span className='label label-default'>MongoDB</span><span className='label label-default'>PL-SQL</span>
              </div>
            </div>
          </span>
        </div>
      </div>

      <div className='panel panel-default'>
        <div className='panel-heading'>
          {sideProjectsTitle}
        </div>
        <div className='panel-body'>
          <span className='panelBody'>
            <ul className='sideProjectDetails'>
              <li>
                  <a href='https://github.com/prajapati-parth/gitlly'>Gitlly</a><span className='label label-default'>React</span><span className='label label-default'>electron</span>
              </li>
              <li>
                  <a href='https://github.com/prajapati-parth/minimal-react'>Minimal-React</a><span className='label label-default'>Nodejs</span><span className='label label-default'>Command line tool</span>
              </li>
              <li>
                  <a href='https://github.com/prajapati-parth/quick-ping'>Quick-ping</a><span className='label label-default'>react native</span>
              </li>
              <li>
                  <a href='https://github.com/prajapati-parth/club'>Club</a><span className='label label-default'>angular2</span><span className='label label-default'>angular-material</span>
              </li>
              <li>
                  <a href='https://github.com/prajapati-parth/glitchy'>Glitchy</a><span className='label label-default'>react</span><span className='label label-default'>electron</span>
              </li>
              <li>
                  <a href='https://github.com/prajapati-parth/prajapati-parth.github.io'>Code Sceptre</a><span className='label label-default'>react</span><span className='label label-default'>github-pages</span>
              </li>
              <li>
                  <span>Jabber</span><span className='label label-default'>angular2</span><span className='label label-default'>electron</span>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutBody