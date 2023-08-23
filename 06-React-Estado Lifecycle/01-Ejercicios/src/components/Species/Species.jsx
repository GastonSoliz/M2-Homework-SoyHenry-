import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({species, handleSpecies, handleAllSpecies}) {
  console.log(species);
  return (
    <div>
      <h2>Species</h2>
      {species.map((data,i)=>{
        return(
          <button key={i} onClick={handleSpecies} value={data}>{data}</button>
        )
      })
      }
      <button onClick={handleAllSpecies}>All Animals</button>
      
    </div>
  )
}
