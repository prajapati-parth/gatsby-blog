import React from 'react'
import Link from 'gatsby-link'

import EmbeddedGist from '../components/EmbeddedGist'
import '../styles/gists.css'

const Gists = (props) => (
  <div className='gistContainer'>
    <h3 className='gistTitle'>For loop with caching</h3>
    <EmbeddedGist className='gistBody' gist='prajapati-parth/d1567f1a796b1e46b32b9b401f8377b4' file='cached-for-loop.js'></EmbeddedGist>
  </div>
)

export default Gists