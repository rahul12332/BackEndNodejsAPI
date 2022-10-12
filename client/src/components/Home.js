import React from 'react'
import "../App.css"
import logo from '../logos/logo.svg'
import Fotter from './Fotter'

const Home = () => {
  return (
    <>
    <div className='homePage'>
      <div className="col-lg-10 col-sm-12 offset-md-1 ">
        <div className="section d-flex align-items-center ">
            <div className="col-lg-6 col-sm-12 ">
                <div className="developerProfile d-flex  flex-column align-items-center ">
                       <p>Welcome to Developer Site</p>
                       <p>Stay Home <i className="fa-sharp fa-solid fa-house-medical-circle-check"></i></p>
                       <p>Stay Healthy And Safe <i className="fa-solid fa-shield-virus"></i> </p>
                       <a href="/covid" className="visitbtn">Visit</a>
                </div>
            </div>
            <div className=" myName col-lg-6 col-sm-12 d-flex">
                <div className="image col-md-10 mt-0 d-flex justify-content-center  ">
                    <img src={logo} alt="" className='logo '/>
                </div>
            </div>
        </div>  
      </div>
    </div>
    <Fotter/>
    </>
  )
}

export default Home
