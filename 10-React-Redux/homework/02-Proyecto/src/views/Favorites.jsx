import { connect } from "react-redux";
import Cards from "../components/Cards.jsx";

export function Favorites(props) {
  const { myFavorites } = props;
  return (
    <div>
      <Cards characters={myFavorites} />;
    </div>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
