import React,{Component} from 'react'

class ManageInput extends Component{
		constructor(){
			super()
			this.state={
				name:''
			}
		}
	componentWillMount(){
		if(localStorage.getItem('name')){
			this.setState({
				username:localStorage.getItem('name')
			});
		}
	}
	render(){
		return(
			<div className='welcome'>
			<div className='welcome-header'>
			<h3>欢迎用户{this.state.username}来到user management</h3>
			<div className='welcome-list'>
			<span>用户列表如下:</span>
			<span className='welcome-add'>添加用户</span>
			</div>
			</div>
			</div>
			)
	}
}
export default ManageInput