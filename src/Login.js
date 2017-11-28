import React,{Component} from 'react'
import LoginHeader from './LoginHeader'

class LoginDiv extends Component{
	render(){
		return(
			<div className="logindiv">
			<div>账号：<input />
			密码：<input /></div>
			<button>重置</button>
			<button>登陆</button>
			</div>
			)
	}
};
class Login extends Component{
	render(){
		return(
			<LoginHeader />
			<LoginDiv />
			)

	}
}

export default Login 