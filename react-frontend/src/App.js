// import logo from './logo.svg';
import './App.css';
import ListOfProjects from './components/ListOfProjects';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddProject from './components/AddProject';
import UpdateProject from './components/UpdateProject';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Login from './components/Login'
import Welcome from './components/Welcome'
import Error from './components/Error'
import Logout from './components/Logout'

function App() {
  return (
    <div>
      <Router>
        {/* <div className="container"> */}
           <Header />
           <div className="container">

              <Switch>
                <Route path = "/" exact component = {Login}></Route>
                <Route path = "/login" component = {Login}></Route>
                <AuthenticatedRoute path = "/welcome" component = {Welcome} />
                {/* <Route path = "/" exact component = {ListOfProjects} /> */}
                <AuthenticatedRoute path = "/projects" component = {ListOfProjects} />
                <AuthenticatedRoute path = "/add-project" component = {AddProject} />
                <AuthenticatedRoute path = "/update-project/:id" component = {UpdateProject} />
                <AuthenticatedRoute path = "/logout" component = {Logout} />
                <Route component = {Error}></Route>
                 {/* <ListOfProjects /> */}
              </Switch>

           </div>
           <Footer />
        {/* </div> */}
      </Router>
    </div>
    
  );
}

export default App;
