import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Manageinput from './Manageinput'
import Managemessage from './Managemessage'
import { deleteuser } from './reducer/Users'
import { connect } from 'react-redux'

class Manage extends Component{
	getIndex(index){
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(index)
		}
		}
	render(){
		return(
			<div>
			<Manageinput />
			<Managemessage users={this.props.users} onDeleteIndex={this.getIndex.bind(this)}/>
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
		onDeleteComment:(index)=>{
			dispatch(deleteuser(index))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Manage) 
