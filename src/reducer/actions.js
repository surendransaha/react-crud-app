import axios from 'axios';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';


export const fetchTodos = (page, limit) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_TODOS_REQUEST });
  
      try {
        const response = await axios.get(`http://localhost:8080/api/todo?page=${page}&limit=${limit}`);
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
      }
    };
  };