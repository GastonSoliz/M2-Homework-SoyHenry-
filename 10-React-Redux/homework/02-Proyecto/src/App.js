import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
//import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
//import SearchBar from './components/SearchBar.jsx';
import Nav from "./components/Nav.jsx";
//import characters, { Rick } from './data.js';
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Home from "./views/Home.jsx";
import Form from "./views/Form.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Favorites from "./views/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "unaPassword";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
  }

  // function onSearch(id){
  //    setCharacters([...characters,example])
  // }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    const arr = characters.filter((ch) => Number(id) !== ch.id);
    setCharacters(arr);
  }

  function random() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      onSearch(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      <Nav onSearch={onSearch} logout={logout} randomize={random} />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/> */}
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
