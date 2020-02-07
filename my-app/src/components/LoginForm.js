// import React from 'react';
// import { getUser } from '../actions/userActions';
// import styled from 'styled-components';

// const Login = (props) => {
//   componentWillUpdate(); {
//     this.props.getUser(); 
//   }


//   const handleSubmit = (e) => {
//      e.preventDefault();
//     dispatch({
//       type: 'USER_GET_START',
//       payload: 'user'
//     })
//   };

//   const handleChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//     console.log(user);
//   };

//   return (
//     <Wrapper>
//       <h1>Welcome to Essentialism!</h1>
      
//       <Form onSubmit={handleSubmit}>
//         <Input
//           type='text'
//           name='username'
//           value={user.username}
//           placeholder='Enter Username'
//           onChange={handleChange}
//         />
//         <Input
//           type='password'
//           name='password'
//           value={user.password}
//           placeholder='Enter Password'
//           onChange={handleChange}
//         />
//         <Button>Login</Button>
//       </Form>
//     </Wrapper>
//   );
// };

// export default Login;

// // Adding styling

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background:  	#2dc8aa;
// `;

// const Button = styled.button`
//   background: #ee9701;
//   border-radius: 20px;
//   padding: 10px;
//   margin: 5px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin: 10px;
//   border-radius: 20px;
//   border: 1px black;
// `;

// const Form = styled.form`
//   background: #89DCF5;
//   border-radius: 15px;
//   border: 7px ridge rgba(28,110,164,0.77);
//   padding: 40px;
//   margin: 0;
//   box-shadow: 10px 10px 8px #888888;
// `;
