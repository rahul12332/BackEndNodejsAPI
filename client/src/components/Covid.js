import React from 'react'
import { useState, useEffect } from 'react'
import CovidItems from './CovidItems'
import Fotter from './Fotter'
import '../App.css'
const Covid = () => {
    const [users, setUsers] =useState(null)
    useEffect(()=>{
       const fetchData= async()=>{
        const response = await fetch('/covid19')
        const jsonData = await response.json()

        if(response.ok){
            setUsers(jsonData)
        }
       }
       fetchData();
    },[])
  
  return (<>
       <div className="Covidcontiner">
       <div className="col-md-10 offset-md-1">

        <div className="d-flex justify-content-center">
          <p className='covidheading'>Covid-19 Data 2022</p> </div>
        <div className="row">
            {users && users.map((user)=>(
                <div className="covidItem col-md-4 my-2" key={user._id}>
                <CovidItems  user={user}/>                
                </div>
                
           ) )}
          </div>

         
        </div>
       
        </div>
        <Fotter/>
        </>
  )
}

export default Covid
