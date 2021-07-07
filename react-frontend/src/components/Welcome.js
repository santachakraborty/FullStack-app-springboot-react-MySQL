import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Welcome extends Component {
  render() {
    return (
      <div>
         <div className="container">
             <h1 className="text-center">Welcome!</h1>
             <div className="text-center">Click to see all of your saved Projects <Link to="/projects">click</Link></div>
         </div>
      </div>
    )
  }
}