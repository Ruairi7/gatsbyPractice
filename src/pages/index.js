import React from "react"
import Header from './components/Header'
import { Link } from 'gatsby'

export default function Home() {
  return(
        <div style={{ color: `purple`}}>
          <Link to="/contact/">Contact</Link>
          <span> </span>
          <Link to="/about/">About</Link>
          <Header headerText="Hello Dear Gatsby!"/>
          <p>what a world.</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
          </div>
  )
}
