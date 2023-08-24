import React, { useState } from 'react'

const FormSample = () => {
    const [username, setUserName] = useState('raj');
    const [email, setEmail] = useState('raji');
    const [isSubmitted, setSubmit] = useState(false);

    const handleUserName = (e) => {
        // console.log(e.target.value);
        setUserName(e.target.value);
    }
    const handleEmail = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        console.log(username, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='UserName' onChange={handleUserName} value={username} />
                {username === "" && isSubmitted && <div>UserName is Required</div>}
                <input placeholder='Email' onChange={handleEmail} value={email} />
                {email === "" && isSubmitted && <div>Email is Required</div>}
                <input type='Submit' />
            </form>
        </div>
    )
}

export default FormSample