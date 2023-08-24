import React from 'react'

const FunctionChildProps = (props) => {
    console.log(props.obj.name);
    return (
        <div>
            <h3>Child</h3>
            <p>Id:{props.obj.value}</p>
            <p>BikeName:{props.obj.name}</p>
            <p>Year:{props.obj.year}</p>
            <p>Price:{props.obj.price}</p>
        </div>
    );
}

export default FunctionChildProps