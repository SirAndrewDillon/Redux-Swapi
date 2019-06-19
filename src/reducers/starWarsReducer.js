import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching:false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {

    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    switch (action.type) {
      case FETCHING_CHARACTERS:
        return { ...state, fetching: true };
      case FETCHING_CHARACTERS_FAILURE:
        return { ...state, fetching: false, error: action.payload };
      case FETCHING_CHARACTERS_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          characters: [...state.characters, ...action.payload],
          fetching: false
        };
      default:
        return state;
    }
  };
  
   
