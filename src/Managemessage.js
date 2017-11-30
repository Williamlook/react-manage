import React,{Component} from 'react'


class Mannagemessage extends Component{
	handleDeleteClick(){
		if(this.props.onDeleteIndex){
			this.props.onDeleteIndex(this.props.index)
			//console.log(this.props.index)
		}
	}
	render(){
		return (
			<div>
			{this.props.users.map((user,i)=>(
				<div key={i} className='message'>
				<h3>用户信息如下:</h3><br />
				<strong className='message-name'>姓名:{user.username}</strong>
				<span className='message-nbsp'>年龄：{user.age}</span>
                <span className='message-nbsp'>性别:{user.gender}</span>
                <button index={i} onClick={this.handleDeleteClick.bind(this)}>删除</button>
				</div>
				))}`
			</div>
		 )
	}
}
export default Mannagemessage
