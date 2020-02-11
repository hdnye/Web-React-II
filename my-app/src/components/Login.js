
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import styled from 'styled-components';


const Login = ({ history, getUser }) => {
  // const { register, handleSubmit } = useForm()
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  
  const handleChange = event => {
    setUser(
      {
        ...user,
        [event.target.name]: event.target.value
      }
    )

  }
  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    getUser(user, history)
    event.target.reset();
  }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axiosWithAuth
  //     .get(`/login/${user}`, user)
  //     .then(res => {
  //       console.log(res)
  //       localStorage.setItem('token', res.user.token)
  //       localStorage.setIrem('username', user.username)
  //       props.history.push('/account-dashboard')
  //     })
  //     .catch(err => console.log(err));
  //   }
    
  return (
    // <div className='login-form'>
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>
          Username:
          <br />
          <Input 
            name="username" 
            // ref={register({ required: true, })} 
            placeholder='Username' 
            type='text'
            onChange={handleChange}
            />
        </label>
        <br />
        <label>
          Password:
          <br />
          <Input 
            name="password" 
            // ref={register({ required: true, })} 
            placeholder='Password' 
            type='password'
            onChange={handleChange}
            />
            <br />
            <Button type="submit">Login</Button>
        </label>
      
      </Form>
    </Wrapper>

  );
 }

//   const mapPropsToState = state => {
//     return {
//       username: state.username,
//       password: state.password
//     }
//   }

 export default connect(null, { getUser })(Login);

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