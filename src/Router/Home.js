import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { stateContext } from '../Context/StateContext';

const Home = () => {
    const { state } = useContext(stateContext);
    const [search] = useSearchParams()
    console.log('search', search.get('userid'), search.get('name'));
    return (
        <div>Home{state.name}{state.age}</div>
    )
}

export default Home