import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, delCounter } from "../actions/App.actions";
import { withRouter } from 'react-router-dom';

class home extends Component {
  render() {
    return (
      <h1>57022062 นาย สรวิศ โยมพนัสสัก</h1>
    );
  }
}

export default home;