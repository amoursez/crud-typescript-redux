import {IUser} from "../types/IUser"

export interface UserState{
    user: any[];
    edit: any,
    loading: boolean,
    error: null | string;
    pagination: number
}

export enum UserActionTypes{
    GET_USERS = "GET_USERS",
    GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
    GET_USERS_ERROR="GET_USERS_ERROS",
    GET_USERS_UPDATE="GET_USERS_UPDATE",
    PAGE_USERS="PAGE_USERS",
}

interface FetchUserActionSuccess{
    type: UserActionTypes.GET_USERS_SUCCESS;
    payload: IUser[]
}


interface FetchUserActionError{
    type: UserActionTypes.GET_USERS_ERROR;
    payload: string
}

interface FetchUserActionEdit{
    type: UserActionTypes.GET_USERS_UPDATE;
    payload:any
}

interface FetchUserAction{
    type: UserActionTypes.GET_USERS;
    
}

export type UserAction = 
FetchUserActionSuccess | FetchUserActionError | FetchUserActionEdit | FetchUserAction