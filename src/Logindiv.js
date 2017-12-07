import React,{ Component } from 'react'
import Manage from './Manage'
import { BrowserRouter as Router, Route, Link ,exact} from 'react-router-dom'
import LoginHeader from './LoginHeader'

class Logindiv extends Component{
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:''
		}
	}
	componentWillMount(){
		if(localStorage.getItem('username')){
			this.setState({
				username:localStorage.getItem('username')
			})
		}
	}
	componentDidMount(){
		this.input.focus()
	}
	manageCom(event){
		if(event.target.value){
			localStorage.setItem('username',event.target.value)
		}
		this.setState({
			username:event.target.value
		})
	}
	passwordCom(event){
		const value=event.target.value;
		let password="";
		for(let i=0;i<value.length;i++){
			password+="*";
		}
		this.setState({
			password:password
		})
	}
	resetClick(){
		this.setState({
			username:'',
			password:''
		})
	}
	onLogin(){
		console.log(1)
		if(this.state.username!=='admin'||this.state.password!=='admin'){
			alert('登录名或密码错误')
		}
	}
	render(){
		return(
			<Router>
			<div>
			<LoginHeader />
			<div className="logindiv">
			<span className="span-username">账号：</span>
			<input type="text" value={this.state.username} ref={(input)=>this.input=input} onChange={this.manageCom.bind(this)} /><br />
			<span className="span-username">密码：</span>
			<input value={this.state.password} onChange={this.passwordCom.bind(this)}/><br />
			<div className="button">
			<button className="reset" onClick={this.resetClick.bind(this)}>重置</button>
			<Link to='/manage'><button className="login" onClick={this.onLogin.bind(this)}>登陆</button></Link>
			<Route path='/manage' component={Manage} />
			</div>
			</div>
			</div>
			</Router>
			)
	}
};
export default Logindiv