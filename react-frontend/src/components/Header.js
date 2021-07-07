// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>
//         <header>
//           <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//              <div><a href="#" className="navbar-brand">Project Management App</a></div>
//           </nav>
//         </header>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import {withRouter} from 'react-router';   // for automatic refresh
// import image from '../book2.png'

class Header extends Component {
  render() {

      const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      console.log(isUserLoggedIn);

    return (
      <div>
        <header>
          
           <nav className="navbar navbar-expand-md navbar-light bg-info">
                {/* <img src={image} height={40} width={50} /> */}
                <div> <a style={{marginLeft:"30px"}} href="#" className="navbar-brand">Project Management Application</a></div>
              
                <ul className="navbar-nav">
                   {isUserLoggedIn && <li><Link className="nav-link" to='/welcome'>Home</Link></li>}
                </ul>

                <ul className="navbar-nav navbar-collapse justify-content-end">
                  {!isUserLoggedIn && <li style={{marginRight:"50px"}}><Link className="nav-link" to="/login">Login</Link></li>}
                  {isUserLoggedIn && <li style={{marginRight:"50px"}}><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
          
        </header>
      </div>
    )
  }
}

export default withRouter(Header)