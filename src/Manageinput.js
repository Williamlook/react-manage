import React,{Component} from 'react'

class ManageInput extends Component{
		constructor(){
			super()
			this.state={
				username:''
			}
		}
	componentWillMount(){
		if(localStorage.getItem('username')){
			this.setState({
				username:localStorage.getItem('username')
			});
		}
	}
	render(){
		return(
			<div className='welcome'>
			<div className='welcome-header'>
			<h3>欢迎用户{this.state.username}来到user management</h3>
			<button className='welcome-buttom'>添加用户</button>
			<span>用户列表如下:</span>
			</div>
			</div>
			)
	}
}
export default ManageInput