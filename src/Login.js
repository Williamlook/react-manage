import React,{Component} from 'react'
import LoginHeader from './LoginHeader'
import { Link } from 'react-router-dom'

class LoginDiv extends Component{
	constructor(){
		super()
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
	render(){
		return(
			<div className="logindiv">
			<span className="span-username">账号：</span>
			<input type="text" value={this.state.username} ref={(input)=>this.input=input} onChange={this.manageCom.bind(this)} /><br />
			<span className="span-username">密码：</span>
			<input value={this.state.password} onChange={this.passwordCom.bind(this)}/><br />
			<div className="button">
			<button className="reset" onClick={this.resetClick.bind(this)}>重置</button>
			<button className="login">登陆</button>
			</div>
			</div>
			)
	}
};
class Login extends Component{
	render(){
		return(
			<div>
			<LoginHeader />
			<LoginDiv />
			</div>
			)

	}
}

export default Login 