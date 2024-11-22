import React from 'react';
import { Provider } from 'react-redux';
import store from './reducer/store';
import ToDoList from './components/ToDoList';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Provider store={store}>

      <>
        <ToDoList/>
      </>

    </Provider>
  );
}

export default App;
