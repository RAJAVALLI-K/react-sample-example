import React from 'react'
import { useParams } from 'react-router-dom'
const Header = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>Header</div>
    )
}

export default Header