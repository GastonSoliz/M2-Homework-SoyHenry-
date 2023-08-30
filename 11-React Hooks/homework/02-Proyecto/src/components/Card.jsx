import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Card(prop) {
  const { character, onClose, myFavorites, addFav, removeFav } = prop;
  console.log(prop);

  //console.log(onClose);
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(character.id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === prop.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button
        onClick={() => {
          onClose(character.id);
        }}
      >
        X
      </button>
      <Link to={`/detail/${character.id}`}>
        <h2>Name: {character.name}</h2>
      </Link>
      <h2>Status: {character.status}</h2>
      <h2>Species:{character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <h2>{character.origin.name}</h2>
      <img src={character.image} alt="" />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
