
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import styled from 'styled-components';

class Login extends Component {
    constructor() {
      super();
        this.state = {
         username: '',
         password: ''   
    }
} 

   handleSubmit = (e) => {
     e.preventDefault();
     e.target.reset();
  };

   handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    
  };

  render() {
  return (
    <Wrapper>
      <h1>Welcome to Essentialism!</h1>
      
      <Form onSubmit={this.state.handleSubmit}>
        <Input
          type='text'
          name='username'
          value={this.state.username}
          placeholder='Enter Username'
          onChange={this.state.handleChange}
        />
        <Input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Enter Password'
          onChange={this.state.handleChange}
        />
        <Button>Login</Button>
      </Form>
    </Wrapper>
  );
 };
};

const mapPropsToState = state => {
 return {
   error: state.error,
     username: state.username,
     password: state.password    
 }
}

export default connect(mapPropsToState, { getUser })(Login);

// Adding styling

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
