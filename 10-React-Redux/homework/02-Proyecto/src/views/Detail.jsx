import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  // function condicional(){
  //     return(
  //         <h2>Name: {character.name}</h2>
  //         <h2>Status: {character.status}</h2>
  //         <h2>Species: {character.species}</h2>
  //         <h2>Gender: {character.gender}</h2>
  //         <h2>Origin: {character.origin.name}</h2>
  //         <img src={character.image} alt={character.name}/>
  //     );
  // }
  if (!{ character }) {
    return <h1>PAGINA DETAIL</h1>;
  } else {
    return (
      <div>
        {/* {console.log(character)} */}
        <h2>Name: {character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin?.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
    );
  }
}
