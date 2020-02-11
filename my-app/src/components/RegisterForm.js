import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { rootReducer } from '../reducers';
import styled from 'styled-components';
// registration form 
// basic information to register for the app

const RegisterForm = () => {
    const [info, setInfo] = useState('');
    const [state, dispatch] = useReducer(rootReducer);


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
        <Wrapper>
        
            <Form onSubmit={event => handleSubmit(event)}>

                <label>
                    Name:
                    <Input 
                        type='text'
                        name='name'
                        value={info.name}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <label>
                    Email:
                    <Input 
                        type='email'
                        name='email'
                        value={info.email}
                        onChange={event => handleChange(event)}
                    />
                </label>

                <br/>

                <Button>Simplify My Life</Button>

            </Form>
        </Wrapper>
    )
}

export default connect(null, { rootReducer })(RegisterForm);

//styling

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:  	#2dc8aa;
`;

const Button = styled.button`
  background: #ee9701;
  border-radius: 20px;
  padding: 10px;
  margin: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  border: 1px black;
`;

const Form = styled.form`
  background: #89DCF5;
  border-radius: 15px;
  border: 7px ridge rgba(28,110,164,0.77);
  padding: 40px;
  margin: 0;
  box-shadow: 10px 10px 8px #888888;
`;