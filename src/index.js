import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Manage from './Manage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userreducer from './reducer/Users'
import Logindiv from './Logindiv'
import { BrowserRouter , Router, Route, Link ,exact,Switch,Redirect} from 'react-router-dom'

/*fetch('../server.js',{method:'get'}).then((response)=>{
	if(response.status!==200){
		console.log('获取失败'+response.status);
		return;
	}
	response.json().then(function(data){
		console.log(data);
		const STATE_FROM_SERVER=data;
		const store=createStore(userreducer,STATE_FROM_SERVER)
		
}).catch(function(err){
	console.log('fetch error');
})*/
const store=createStore(userreducer);

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
	<Switch>
	<Route path='/' exact component={Logindiv} />
	<Route path='/manage' component={Manage} />
	</Switch>
	</BrowserRouter>
	</Provider>,document.getElementById('root'));



