import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "../actions/types";
const initialState = {
  list: [],
  storeName: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, list: [...state.list, action.payload] };
    case DELETE_PRODUCT: {
      const newList = state.list.filter((obj) => obj.id !== action.payload);
      return { ...state, list: newList };
    }
    case GET_STORE_NAME:
      return { ...state, storeName: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
