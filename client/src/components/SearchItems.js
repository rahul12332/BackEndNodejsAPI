const SearchItems=({city})=>{
  return (
    
      <div className="card ">
        <div className="title">
  <h5 className="card-title d-flex justify-content-center">{city.state} -<span> {city.country}</span></h5>
  </div>
<div className="card-body ">
  <div className="case">
  <p className="card-text">Cases</p>
  <p className="card-text">:</p>
  <p className="card-text">{city.cases}</p>
  </div>
  <div className="death">
  <p className="card-text">Death</p>
  <p className="card-text">: </p>
  <p className="card-text">{city.death}</p>
  </div>

</div>
</div>
  )
}

export default SearchItems














// import React from 'react'

// const SearchItems = (querie) => {
//   return (
//     <div>
//       <h1>{querie.state}</h1>

//     </div>
//   )
// }

// export default SearchItems
