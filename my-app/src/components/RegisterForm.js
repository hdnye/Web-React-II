import React, { useState, useReducer } from 'react';
import '../App.css';
import userReducer from '../reducers/userReducer';
// registration form 
// basic information to register for the app

export default function RegisterForm () {
    const [info, setInfo] = useState('');
    const [state, dispatch] = useReducer(userReducer);


    const handleChange = e => {
        e.preventDefault();
        dispatch({...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(info.name);
        // console.log(info.email);
        dispatch({
            type: 'USER_POST_START',
            payload: 'info'
        });
        setInfo('');
    }

    return (
        <div className='form'>
            <form onSubmit={event => handleSubmit(event)}>

                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={info.name}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <label>
                    Email:
                    <input 
                        type='email'
                        name='email'
                        value={info.email}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <button>Simplify My Life</button>

            </form>
        </div>
    )
}

