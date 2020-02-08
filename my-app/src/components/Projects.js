// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import  userReducers from './reducers/userReducer';


// class Projects extends Component {
//     componentDidUpdate() {
//         this.props.usersReducers();
//     }


//     render() {
//         const arrItems = this.props.projects.map(project => {
//             <div key={project.id}>
//                 <h3>{project.name}</h3>
//                 <p>{project.body}</p>
//                 <p>{project.completed}</p>
//             </div>
//         })
//         return (
//             <div>
//               <h1>Project List</h1>  
//                 {arrItems}
//                 {/* need form to add new project here 
//                 project name
//                 project body
//                 completed*/}
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     projects: state.projects.user,
//     newProject: state.projects.project
// })

// export default connect(mapStateToProps, { userReducer })(Projects);