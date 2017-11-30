import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './Login'
import Manage from './Manage'
import { Router, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userreducer from './reducer/Users'

let store=createStore(userreducer)

ReactDOM.render(
	<Provider store={store}>
	<Manage />
	</Provider>,document.getElementById('root'));