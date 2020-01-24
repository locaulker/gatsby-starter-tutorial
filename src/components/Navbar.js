import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <h2>Company</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/product/">Products</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
