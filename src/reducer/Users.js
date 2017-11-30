//action type
const ADD_USER ='ADD_USER'
const DELETE_USER='DELETE_USER'

//reducer
export default function (state,action){
	if(!state){
		state={
			users:[{username:'测试',age:'20',gender:'男'},{username:'测试',age:'20',gender:'男'}]
		}
	}
	switch (action.type){
		case 'ADD_USER':
		return {users:[...state,action.user]}
		break
		case 'DELETE_USER':
		return {
			users:[...state.users.userIndex(0,userIndex),
			...state.users.userIndex(userIndex++)]
		}
		break
		default:
		return state
	}
}
//action creator
export const adduser=(user)=>{
	return {type:ADD_USER,user}
}
export const deleteuser=(userIndex)=>{
	return {type:DELETE_USER,userIndex}
}

