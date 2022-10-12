import React from "react";
import { useState, useEffect } from "react";
import SearchItems from "./SearchItems";
import "../App.css";
import Fotter from "./Fotter";
const Search = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);
  console.log(city);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/search/${search}`);
      console.log("useeffect");
      const jsonData = await response.json();

      setCity(jsonData);
    };
    fetchData();
  }, [search]);
  
  // const capitalize=()=>{
  //   let word = 
  // }


  return (
    <>
      <div className="boxContainer">
        <div className="covidState">
        <p className=" d-flex justify-content-center">
          Covid Search your State {search} 
        </p>
        </div>

        <div className="parent_div">
          <div className="child_div ">
            <input
              type="search"
              className="inputField"
              placeholder="Search...."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <div className="searchResult mt-2">
              <h1>
              <i className="fa-hospital fa-solid fa-hospital d-flex justify-content-center mt-1"></i>
              </h1>
              {!search ? (
                <p className="d-flex justify-content-center"> Covid Cases-2022 </p>
              ) : (
                <div className="col-md-10 d-flex justify-content-center offset-md-1 flex-column-reverse">
                  {city.map((city) => (
                    <div className="list" key={city._id}>
                      <SearchItems city={city} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Fotter/>
    </>
  );
};

export default Search;
