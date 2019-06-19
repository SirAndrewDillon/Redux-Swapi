import /* we need our action types here*/ "../actions";
import { types } from "@babel/core";
const initialState = {
  characters: [],
  fetching:false,
  fetched: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return Object.assign({},state,
        {fetching:true}
      )
    case FETCHED:
    return Object.assign({},state,
      {fetching:false,
      fetched: true,
      chars: action.payload}
    )
    case ERROR: 
    return Object.assign({},state,{
      fetching:false,
      error:action.payload
      })
    default:
      return state;
  }
};
