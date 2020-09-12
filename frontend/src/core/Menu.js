import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/helper';

const currentTab =(history, path) => {
    if(history.location.pathname == path){
        return {color : '#2ecc72'}
    }else{
        return {color : ''}
    }
}



const Menu = ({history, path}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">T-Shirts Store</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link style={currentTab(history,'/')} className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item ">
        <Link style={currentTab(history,'/cart')} className="nav-link" to="/cart">Cart</Link>
      </li>
     {isAuthenticated() && (
          <li className="nav-item ">
          <Link style={currentTab(history,'/dashboard')} className="nav-link" to="/user/dashboard">Dashboard</Link>
        </li>
     )}
      {!isAuthenticated() && (
          <>
          <li className="nav-item ">
        <Link style={currentTab(history,'/signup')} className="nav-link" to="/signup">Sign up</Link>
      </li>
      <li className="nav-item ">
        <Link style={currentTab(history,'/signin')} className="nav-link" to="/signin">Sign in</Link>
      </li>
          </>
      )}
      
      {isAuthenticated() && (
          <li style={{cursor:'pointer'}} className="nav-item ">
          <span onClick={()=>{
               signout(()=>{
                   history.push("/")
            })
    }} className="nav-link text-warning">Sign out</span>
        </li> 
      )}
      
    </ul>
  </div>
</nav>
     );
}
 
export default withRouter(Menu);