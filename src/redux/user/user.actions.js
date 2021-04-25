import { UserActionTypes } from './user.types';


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,  //== get value  'SET_CURRENT_USER' from file user.types.js 
    payload: user 
})