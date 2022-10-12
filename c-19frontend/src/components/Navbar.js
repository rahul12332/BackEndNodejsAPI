import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='menuBar'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand"><h3>Covid <i className="fa-solid fa-virus-covid"></i> 19 </h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><h4 className='nav-list'>Home</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/covid"><h4 className='nav-list'>Covid</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search"><h4 className='nav-list'>C-Search</h4></Link>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
