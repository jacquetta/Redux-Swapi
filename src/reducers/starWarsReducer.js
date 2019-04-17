import { FETCHING, FAIL, SUCCESS } from  "../actions";
const initialState = {
  characters: [],
  error: '',
  isFetching: false
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return{
        ...state,
        isFetching: true,
        error: ''
    };

    case SUCCESS: 
      return{
        characters: action.payload,
        isFetching: false,
        error: ''
      };

      case FAIL: 
      return{
        ...state,
        error: action.payload
      };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
