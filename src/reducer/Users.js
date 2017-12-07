//action type
const INIT_USER='INIT_USER'
const ADD_USER ='ADD_USER'
const DELETE_USER='DELETE_USER'

//reducer
export default function (state,action){
	if(!state){
		state={
			users:[{'username':'测试','age':20,'gender':'男'},{'username':'测试','age':20,'gender':'男'}]
		}
	}
	switch (action.type){
		case 'INIT_USER':
		return {users:action.users}
		break
		case 'ADD_USER':
		return {users:[...state.users,action.user]}
		break
		case 'DELETE_USER':
		return {
			users:[...state.users.slice(0,action.userIndex++),
			...state.users.slice(action.userIndex)]
		}
		break
		default:
		return state
	}
}

//action creator
export const initusers=(users)=>{
  return {type:INIT_USER,users}
}
export const adduser=(user)=>{
	return {type:ADD_USER,user}
}
export const deleteuser=(userIndex)=>{
	return {type:DELETE_USER,userIndex}
}

