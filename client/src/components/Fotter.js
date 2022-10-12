import React from 'react'
import '../App.css'

const Fotter = () => {
  return (
    <div>
      <div className="col-md-12">
        <div className="col-md-10 col-md-12">
      <div className="footer">
            <div className="myFooter col-md-4 col-sm-12">
                <div className="LinkedIn d-flex justify-content-center  align-items-center">
                       <h1><i className="fa-brands fa-linkedin" ></i></h1>
                       <a className='MyliPro' href="https://www.linkedin.com/in/amit-chandra-280353225/"target="_blank" rel="noreferrer">
                        <h3 className='limypro'>LinkedIn</h3></a>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <div className="github d-flex justify-content-center  align-items-center">
                    <h1><i className="fa-brands fa-github"></i></h1>
                    <a className='MyliPro' href="https://www.linkedin.com/in/amit-chandra-280353225/"target="_blank" rel="noreferrer">
                    <h3 className='limypro'>GitHub</h3></a>


                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Fotter
