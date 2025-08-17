import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userExistance, setUserExistance] = useState(false);

    const closePopup = () => {
        setUserExistance(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {
            email,
            username,
            password
        })
        .then((res) => {
            if (res.status === 201) {
                setTimeout(() => {
                    window.location.href =  `${process.env.REACT_APP_DASHBOARD_URL}`;
                }, 100);
            } else if (res.status === 202) {
                setUserExistance(true);
            }
        })
        .catch((err) => {
            console.error("Signup error:", err);
        });

        setEmail("");
        setUsername("");
        setPassword("");
    };

    return ( 
        <div className='signup-container' data-testid="signup-container">
            <h2>Sign Up</h2>
            <form className='signup-form' onSubmit={handleSubmit} >
                <label htmlFor="email">Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <label htmlFor="username">Username:</label>
                <input
                    type='text'
                    id='username'
                    value={username}
                    required
                    onChange={(e)=> setUsername(e.target.value)}   
                />

                <label htmlFor='password'>Password:</label>
                <input
                    value={password}
                    type='password'
                    id='password'
                    required
                    onChange={(e)=> setPassword(e.target.value)}
                />

                <button data-testid="signupButton" type="submit">Sign Up</button>
            </form>

            {userExistance && 
            <div className='popup'>
                <div className='popup-content'>
                    <p>The user already exists! Please Log in</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Signup;
