import { Dispatch } from "redux"
import { IUser } from "../../types/IUser"
import { UserAction, UserActionTypes } from "../../types/types"
import axios from 'axios';
import { API } from "../../helpers/helpers";

export const addUser = (newUser: IUser) =>{
    return async (dispatch : Dispatch <UserAction>) => {
        try{
            dispatch({type:UserActionTypes.GET_USERS})
            await axios.post(API, newUser)

        }catch(error:any){
            dispatch({type:UserActionTypes.GET_USERS_ERROR, payload: error})
        }
    }
}
export const getUsers = () => {
    return async (dispatch: Dispatch <UserAction>) => {
        try {
            dispatch({type: UserActionTypes.GET_USERS})
            const res = await axios(API)
            dispatch({type: UserActionTypes.GET_USERS_SUCCESS, payload: res.data})
        } catch (error: any) {
            dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})
        }
    }
}

export const deleteUser= (id:any) => {
  return async (dispatch: Dispatch<UserAction>) => {
      try{
        await axios.delete(`${API}/${id}`)
        getUsers()
      }catch(error:any){
         dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})
      }
  }
}

export const editedUser = (id: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const { data } = await axios.get(`${API}/${id}`)
            dispatch({type: UserActionTypes.GET_USERS_UPDATE, payload: data})
        } catch (error:any) {
            dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})   
        }
    }
}
export const saveEditedUser =  (id: any, editedUser: IUser) => {
    return async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.GET_USERS})
        await axios.patch(`${API}/${id}`, editedUser)
    } catch (error: any) {
        dispatch({type: UserActionTypes.GET_USERS_ERROR, payload: error})          
    }
}
}
