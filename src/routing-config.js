import React from 'react'
import { Redirect } from 'react-router'
import {  home, home1 } from './components'
import fakeAuth from './Auth'

const routes = [
  
  {
    'path': '/home',
    'component': home
  },
  {
    'path': '/home1',
    'component': home1
  }
];

export default routes;
