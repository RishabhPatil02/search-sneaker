import React, { useEffect, useState} from "react";
import "./App.css";
import Sneaks from "./Sneaks"
import axios from 'axios';

const App=()=>{



  const[sneakers,setSneakers]=useState([]);

  const[search,setSearch]=useState("");

  useEffect(()=>{
    getSneakers();
  }, [search]);

  const getSneakers=async()=>{
    // const response=await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${search}`);
    // const data= await response.json();

var options = {
  method: 'GET',
  url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
  params: {limit: '100', brand: `${search}`},
  headers: {
    'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
    'x-rapidapi-key': 'd5bec2be9dmshfbd9e36848bc039p1e31f8jsnf5918fa65e99'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  setSneakers(response.data.results);
    console.log(sneakers);
}).catch(function (error) {
	console.error(error);
});
    
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
        sneaker.image.thumbnail!=""&&sneaker.shoe!=""&&sneaker.colorway!=""&&sneaker.gender!=""&&sneaker.title!=""?
        <Sneaks 
         key={sneaker.id}
         title={sneaker.shoe} 
         link={sneaker.links.goat!=""?sneaker.links.goat:sneaker.links.flightClub!=""?sneaker.links.flightClub:sneaker.links.stockX!=""?sneaker.links.stockX:sneaker.links.stadiumGoods!=""?sneaker.links.stadiumGoods:""}
         color={sneaker.colorway} 
         gender={sneaker.gender} 
         image={sneaker.image.thumbnail}
         shoe={sneaker.title}
        />:<div></div>
      ))}
      </div>
    </div>
  );
};

export default App;