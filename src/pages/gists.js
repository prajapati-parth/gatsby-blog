import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet"

import EmbeddedGist from '../components/EmbeddedGist'
import Copy from '../utils/appCopy'
import '../styles/gists.css'

const Gists = () => (
  <div className='gistContainer'>
    <Helmet title={`Gists - ${Copy.blogName}`} />
    <h3 className='gistTitle'>For loop with caching</h3>
    <EmbeddedGist className='gistBody' gist='prajapati-parth/d1567f1a796b1e46b32b9b401f8377b4' file='cached-for-loop.js'></EmbeddedGist>

    <h3 className='gistTitle'>Array chunker</h3>
    <EmbeddedGist className='gistBody' gist='prajapati-parth/c0981026426e9060598cecb5cfc6ff61' file='array-chunker.js'></EmbeddedGist>
  </div>
)

export default Gists