import { useState } from 'react';
import './App.css';
import axios from "axios";
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'
//import characters, { Rick } from './data.js';

const example = [{
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
},];

function App() {
   const [characters,setCharacters] = useState([]);

   // function onSearch(id){
   //    setCharacters([...characters,example])
   // }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      const arr = characters.filter((ch)=> Number(id)!== ch.id );
      setCharacters(arr);
   }


   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
