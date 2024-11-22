import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../reducer/actions";



const ToDoList = () => {

    const dispatch = useDispatch();

    const { loading, todos, error } = useSelector((state) => state.todo);

    useEffect(() => {
        dispatch(fetchTodos(1, 10)); // Fetch todos on component mount
      }, [dispatch]);

      if(loading) return (<p>loading ...</p>);
      if(error) return(<p>Error : {error}</p>)


    return(
        <>
         <div>
      <h1>Todo List</h1>
      <ul>
        {todos && todos.data && todos.data.length > 0 && todos.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
        </>
    )

}

export default ToDoList;