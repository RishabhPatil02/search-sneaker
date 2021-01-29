import React, { useEffect, useState} from "react";
import "./App.css";
import Sneaks from "./Sneaks"

const App=()=>{



  const[sneakers,setSneakers]=useState([]);

  const[search,setSearch]=useState("");

  useEffect(()=>{
    getSneakers();
  }, [search]);

  const getSneakers=async()=>{
    const response=await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${search}`);
    const data= await response.json();
    setSneakers(data.results);
    console.log(sneakers);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    //console.log(search);
  }

  return (
    <div className="App">
      <header>
      <div class="logo"><b>No<span> br</span>ai<span>n</span>er</b></div>
      </header>
      
      <form>
      <div class="input-field">
    <input type="text" id="name" required  onChange={updateSearch}/>
    <label for="name">Search brand</label>
  </div> 
        
      </form>
      <div className="flex-box">
      {sneakers.map(sneaker=>(
        
        <Sneaks 
        key={sneaker.id}
         title={sneaker.shoe} 
         color={sneaker.colorway} 
         gender={sneaker.gender} 
         image={sneaker.media.thumbUrl}
         shoe={sneaker.title}
        />
      ))}
      </div>
    </div>
  );
};

export default App;