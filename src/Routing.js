import React ,{useReducer}from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Form from './Router/Form';
import Header from './Router/Header';
import Home from './Router/Home';
import { stateContext } from './Context/StateContext';
import { initialState, stateReducer } from './Context/reducer';

const Routing = () => {
    const[state,dispatch]=useReducer(stateReducer,initialState);
    console.log("routing",state);
   
    return (
        <stateContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form />}></Route>
                    <Route path='/Header' element={<Header />}></Route>
                    <Route path='/Home' element={<Home />}></Route>
                    {/* <Route path="*" element={<h1>Not Found!!!</h1>}></Route>
                <Route path="*" element={<Form />}></Route> */}
                    <Route path="*" element={<Navigate to={'/Home'}></Navigate>}></Route>

                </Routes>
            </BrowserRouter>
        </stateContext.Provider>
    )
}

export default Routing