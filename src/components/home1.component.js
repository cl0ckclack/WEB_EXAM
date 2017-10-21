import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';

class home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
  }
  render() {
    return (
      <div>
    <button ><h1>Get Data</h1></button><br/>
        <button ><h1>Clear</h1></button>
       
      </div>
    );
  }
}



export default home1;


