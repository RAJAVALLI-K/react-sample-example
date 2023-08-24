import React from 'react'

const ChildUseState = (props) => {
    console.log(props)
    return (
        <div>
            <h3>ChildClass</h3>
            <div>
                {props.message.map((n, index) => (
                    <div key={index}>
                        <p>Name is : {n.name}</p>
                        <p>Ram is : {n.ram}</p>
                        <p>Price is : {n.price}</p>
                        <button onClick={() => { props.func(index) }}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChildUseState