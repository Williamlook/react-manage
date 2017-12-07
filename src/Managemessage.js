import React,{Component} from 'react'


class Mannagemessage extends Component{
	handleDeleteClick(i){
		let nowStorage=JSON.parse(localStorage.getItem('user'))		
		nowStorage.splice(i,1)
		localStorage.setItem('user',JSON.stringify(nowStorage))
		if(this.props.onDeleteIndex){
			this.props.onDeleteIndex(i)
			console.log(i)
		}
	}
	render(){
		return (
			<div className='message-div'>
			<strong className='message-hea'>用户信息如下:</strong><br />
			{this.props.users.map((user,i)=>(
				<div key={i} className='message'>
				<strong className='message-users'>姓名:{user.username}</strong>
				<span className='message-users'>年龄：{user.age}</span>
                <span className='message-users'>性别:{user.gender}</span>
                <button onClick={this.handleDeleteClick.bind(this,i)}>删除</button>
                <div style={{height:'5rem',width:'5rem',backgroundImage:`url(${user.img})`,backgroundSize:'5rem'}}></div>
				</div>
				))}
			</div>
		 )
	}
}
export default Mannagemessage
