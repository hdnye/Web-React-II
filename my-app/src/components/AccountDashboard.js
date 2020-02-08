import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getValues }  from '../actions';

// import projects & values

 class AccountDashboard extends Component {
    componentWillUpdate() {

        this.props.getUser();
        this.props.getValues();
    }  
    
    handleValues = values => {
        this.props.getValues(values);
    }
    render() {
        //.map
          const dashItems = this.values && this.props.values.map(value => (
                <div key={value.id}>
                    <h3>{value.user}</h3>
                    <p>{value.values}</p>
                    <p>{value.projects}</p>
                </div>
           ));
        return ( 
     
             <div>
                <h1>Dashboard</h1> 
                  {dashItems}
             </div>
        );
    }
}

const mapStateToProps = state => ({

     //state var here
    values: state.values
});

export default connect(mapStateToProps, { getValues })(AccountDashboard);
