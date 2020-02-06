import React from 'react';

import { Route, Redirect } from 'react-router-dom';



export default function PrivateRoute({ component: Component, ...rest}) {
     let loggedIn = localStorage.getItem('token');
    return (
        <Route
         {...rest}>
             {loggedIn ? <Component /> : <Redirect to='login' /> }
        </Route>
     );
};   
        
 
// =======
// import { Route, Redirect } from 'react-router';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (localStorage.getItem('token')) {
//           return <Component {...props} />;
//         }
//         return <Redirect to='/' />;
//       }}
//     />
//   );
// };

// export default PrivateRoute;
// >>>>>>> development
