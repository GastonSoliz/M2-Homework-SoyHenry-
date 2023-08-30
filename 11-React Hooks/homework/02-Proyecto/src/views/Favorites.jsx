import { connect, useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards.jsx";
import { filterCards, orderCards } from "../redux/actions.js";

export function Favorites() {
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  function HandleOrder(e) {
    dispatch(orderCards(e.target.value));
  }

  function HandleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  return (
    <div>
      <select onChange={HandleOrder}>
        <option value="Ascendentes">Ascendente</option>
        <option value="Descendentes">Descendente</option>
      </select>
      <select onChange={HandleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <Cards characters={myFavorites} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
