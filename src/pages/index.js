import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>This is my blog website.</p>
    <p>New blog is coming soon</p>
    <Link to="/about/">Go to about page</Link>
  </div>
)

export default IndexPage