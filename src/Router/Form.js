import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { stateContext } from '../Context/StateContext';

const Form = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(stateContext);
    console.log('state', state);

    const goHome = () => {
        navigate('/Home');
        // navigate({
        //     pathname: "/Home",
        //     seaech: "?userid:888&name:raji"
        // })
    }

    const updateName = () => {
        dispatch({ type: "UPDATE_NAME", payload: "Context" });
    }

    const updateAge = () => {
        dispatch({ type: "UPDATE_AGE", payload: 21 });
    }

    return (
        <div>
            <h1>Form</h1>
            {state.name}
            <button onClick={() => updateName()}>Update Name</button>
            {state.age}
            <button onClick={() => updateAge()}>Update Age</button>
            <Link to={'/Header'}>Header</Link>
            <button onClick={() => goHome()}>Home</button>
        </div>
    )
}

export default Form