import { combineReducers } from "redux";
import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
  } from './actions';

  const initialState = {
    loading: false,
    todos: [],
    error: null,
  };

  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return { ...state, loading: true };
      case FETCH_TODOS_SUCCESS:
        return { ...state, loading: false, todos: action.payload, error: null };
      case FETCH_TODOS_FAILURE:
        return { ...state, loading: false, todos: [], error: action.payload };
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    todo: todoReducer,
  });
  
  export default rootReducer;