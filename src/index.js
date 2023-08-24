import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Todo from './ToDoList/Todo';
import Routing from './Routing';
// import ClassProps from './Props/ClassProps';
// import ParentClass from './State/ParentClass';
// import ParentUseState from './UseState/ParentUseState';
// import FunctionProps from './Props/FunctionProps';
// import LifeCycle from './LifeCycle/LifeCycle';
// import FormSample from './FormSample/FormSample';
// import FunctionLifeCycle from './FunctionLifeCycle/FunctionLifeCycle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <LifeCycle />
  // <FormSample />
  // <FunctionProps />
  // <ParentUseState />
  // <ParentClass />
  // <ClassProps />
  // <FunctionLifeCycle />
  <Routing />
  // <Todo />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
