import React,{Component} from 'react'


class Mannagemessage extends Component{
	handleDeleteClick(){
		if(this.props.onDeleteIndex){
			this.props.onDeleteIndex(this.props.index)
		}
	}
	render(){
		return (
			<div>
			{this.props.users.map=(user,i)=>retun(
				<div key={i} >
				<h5>用户信息如下:</h5>
				<strong>姓名：{user.username}</strong>
				<span>年龄：{user.age}</span>
                <span>性别:{user.gender}</span>
                <button index={i} onClick={this.handleDeleteClick.bind(this)}>删除</button>
				</div>
				)}
			</div>
		 )
	}
}
export default Mannagemessage
