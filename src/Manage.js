import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Manageinput from './Manageinput'
import Managemessage from './Managemessage'
import { deleteuser,adduser,initusers} from './reducer/Users'
import { connect } from 'react-redux'
import Adduser from './Adduser'

class Manage extends Component{
	getIndex(index){
		if (this.props.onDeleteuser) {
			this.props.onDeleteuser(index)
		}
		}
	getUser(user){
		if(this.props.onAdduser){
			this.props.onAdduser(user)
		}
	}
	componentWillMount(){
		const localAddUser=JSON.parse(localStorage.getItem('user'));
		if(localAddUser){
		this.props.onInitusers(localAddUser);
		}
	}
	render(){
		return(
			<div>
			<Manageinput />
			<Managemessage users={this.props.users} onDeleteIndex={this.getIndex.bind(this)}/>
			<Adduser onSubmitUser={this.getUser.bind(this)}/>
			</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return {
		users:state.users
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		onInitusers:(users)=>{
			dispatch(initusers(users))
		},
		onDeleteuser:(index)=>{
			dispatch(deleteuser(index))
		},
		onAdduser:(user)=>{
			dispatch(adduser(user))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Manage) 
