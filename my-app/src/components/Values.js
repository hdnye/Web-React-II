import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { action } from './actions' here
// import Project from './components/Projects';
export default class Values extends Component {
    componentDidUpdate() {
        this.props.usersReducers();
    }

    // prioritizing system

    onSubmit = e => {
        e.preventDefault;
       this.props.addValue(value); 
    }

    render() {
        const valueChoices = this.props.values.map(choices => (
            <div key={choices.id}>
                <h3>{choices.values}</h3>
            </div>
        ))
        return (
            <div>
              <h1>
                  {/* form will go here to add/delete options 
                      add project list held in state */}
              </h1>
            </div>
        )
    }
}


export default connect(null, { values })(Values); //add action to connect