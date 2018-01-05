import React from 'react'
import Link from 'gatsby-link'

import AboutSidebar from '../components/AboutSidebar'
import AboutBody from '../components/AboutBody'

const About = () => (
  <div>
    <div className='bodyContainer'>
      <div className="row">
        <div className="col-xs-12 col-sm-3">
          <AboutSidebar />
        </div>

        <div className='col-xs-12 col-sm-9 aboutContainer'>
          <AboutBody />
        </div>
      </div>
    </div>
  </div>
)

export default About
