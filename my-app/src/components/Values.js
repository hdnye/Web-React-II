// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import userReducer from './reducers/userReducer';
// //import { action } from './actions' here
// // import Project from './components/Projects';

// class Values extends Component {
//     componentDidUpdate() {
//         this.props.usersReducers();
//     }

//     // prioritizing system

//     onSubmit = e => {
//         e.preventDefault;
//        this.props.addValue(values); 
//     }

//     render() {
//         const valueChoices = this.props.values.map(choices => (
//             <div key={choices.id}>
//                 <h3>{choices.values}</h3>
//             </div>
//         ))
//         return (
//             <div>
//               <h1>
//                   {/* form will go here to add/delete options 
//                       add project list held in state */}
//               </h1>
//             </div>
//         )
//     }
// }


// export default connect(null, { userReducer })(Values); //add action to connect