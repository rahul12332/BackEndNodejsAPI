const CovidItems=({user})=>{
    return (
      
        <div className="card ">
          <div className="title">
    <h5 className="card-title d-flex justify-content-center">{user.state}</h5>
    </div>
  <div className="card-body ">
    <div className="case">
    <p className="card-text">Cases</p>
    <p className="card-text">:</p>
    <p className="card-text">{user.cases}</p>
    </div>
    <div className="death">
    <p className="card-text">Death</p>
    <p className="card-text">: </p>
    <p className="card-text">{user.death}</p>
    </div>

  </div>
</div>
    )
}

export default CovidItems