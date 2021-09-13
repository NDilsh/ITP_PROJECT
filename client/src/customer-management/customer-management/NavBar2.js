import React, { Component } from 'react';


export default class NavBar2 extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-xl navbar-light bg-light">
           
            <b>&nbsp;&nbsp;&nbsp;&nbsp;Bootstrap</b>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" key="Home">
          <a className="nav-link active" aria-current="page" href={`/home`}>Home</a>
        </li>
        <li className="nav-item" key="Link">
          <a className="nav-link" href="Link">Link</a>
        </li>
        <li className="nav-item dropdown" key="dropdown">
          <a className="nav-link dropdown-toggle" href="drop" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

            <li key="Act"><a className="dropdown-item" href="/Login">Login</a></li>

       

            <li key="anotherAc"><a className="dropdown-item" href={`/Registration`}>Register</a></li>
            <li key="drop"><hr className="dropdown-divider"/></li>
            <li key="some"><a className="dropdown-item" href="something">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item" key="Dis">
          <a className="nav-link disabled" href="Dis" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>

        <li className="nav-item" key="Dis">
          <a className="nav-link" href="Dis" tabIndex="-1" aria-disabled="true">
                 <a className="text-black" style={{textDecoration: 'none'}} href={`/dashboard/data`}>Admin Dashboard</a>
          </a>
        </li>

      </ul>
    
    </div>

</nav>

        );
    }
}

