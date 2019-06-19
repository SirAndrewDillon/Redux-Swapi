import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START } from "../actions";

const initialState = {
  characters: [],
  err:'',
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
    return {
      ...state,
      fetching: true,
      error: "",
    }
    case FETCH_SUCCESS:
    return {
      ...state,
      fetching: false,
      error: "",
      characters: action.payload
      // ...characters, characters: payload.data.characters
    }
    case FETCH_FAIL:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    default:
      return state;
  }
};
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.
  


  
   
