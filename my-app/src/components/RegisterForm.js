import React, { useState } from 'react';
import '../App.css';

// registration form 
// basic information to register for the app

export default function RegisterForm () {
    const [info, setInfo] = useState ({ name: '', email: '' });

    const handleChange = e => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(info.name);
        console.log(info.email);
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

