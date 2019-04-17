import { FETCHING, SUCCESS, FAIL} from  "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

 export function charsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return{
        ...state,
        isFetching: true,
        error: ''
      }
        
    case SUCCESS: 
    return{
      ...state,
      characters: action.payload,
      isFetching: false,
      error: ''
    }

      case FAIL: 
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
}