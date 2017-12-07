import React,{Component} from 'React'

class Adduser extends Component{
	constructor(){
		super()
		this.state={
			user:{
				username:'',
				img:'',
				age:'',
				gender:''
			}
		}
	}
	getUsername(event){
		this.setState({
			username:event.target.value
		})
	}
	getAge(event){
		this.setState({
			age:event.target.value
		})
	}
	getGender(event){
		this.setState({
			gender:event.target.value
		})
	}
	getImg(event){
		const file=this.img.files[0]
		const reader =new FileReader()
		reader.onload=(event)=>{
			const imgURL=event.target.result;
			this.setState({
			img:event.target.result
		})
		}
		//以DataURL的形式读取文件
		reader.readAsDataURL(file);
	}
	handleClick(){
		if(!this.state.username) return alert('请输入姓名')
		if(!this.state.age) return alert('请输入年龄')
		if(this.state.gender!=='男'&&this.state.gender!=='女') return alert('请正确输入性别')		
		const filename=this.img.value
		console.log(filename)
		if(filename.endsWith('.jpg')||filename.endsWith('.png')|filename.endsWith('.gif')){
        if(this.props.onSubmitUser){
    	this.props.onSubmitUser({
    		username:this.state.username,
    		img:this.state.img,
    		age:this.state.age,
    		gender:this.state.gender
    	    });
    	let localUsers=JSON.parse(localStorage.getItem('user'))
    	console.log(localUsers)
    	if(localUsers){
    		let newlocalUsers=[...localUsers,{
    		username:this.state.username,
    		img:this.state.img,
    		age:this.state.age,
    		gender:this.state.gender
    	    }]
    	    localStorage.getItem('user',JSON.stringify(newlocalUsers))
    		/*let newlocalUsers=[]
    		newlocalUsers.push(JSON.parse(localUsers))
    		newlocalUsers.push({
    		username:this.state.username,
    		img:this.state.img,
    		age:this.state.age,
    		gender:this.state.gender
    	    })*/
    	    console.log(newlocalUsers)
    	    localStorage.setItem('user',JSON.stringify(newlocalUsers))
    	    console.log(1)
    	}else{
    		let stateUser=[{'username':'测试','age':20,'gender':'男'},{'username':'测试','age':20,'gender':'男'}]
    		const oneUser={
    		username:this.state.username,
    		img:this.state.img,
    		age:this.state.age,
    		gender:this.state.gender
    	    }
    	    stateUser.push(oneUser)
    	    localStorage.setItem('user',JSON.stringify(stateUser))
    	    console.log(2)
    	}
        this.setState({
        	username:'',
        	img:'',
        	age:'',
        	gender:''
        })
        this.input.focus()
    }
    }else{
    	alert('请正确传输图片')	
    }
}

render(){
	return(
		<div className='adduser'>
		<div className='adduser-input'><span>姓名：</span><input type="text" value={this.state.username} onChange={this.getUsername.bind(this)} ref={(input)=>this.input=input}/></div>
		<div className='adduser-input'><input type='file' ref={(img)=>this.img=img} onChange={this.getImg.bind(this)}/></div>
		<div className='adduser-input'><span>年龄：</span><input type="text" value={this.state.age} onChange={this.getAge.bind(this)}/></div>
		<div className='adduser-input'><span>性别：</span><input type="text" value={this.state.gender} onChange={this.getGender.bind(this)}/></div>
		<button className='adduser-input' onClick={this.handleClick.bind(this)}>添加用户</button>
		</div>
		)
    }
}

export default Adduser