import { takeEvery, call}  from 'redux-saga/effects';
import {signUpApi} from '../api/signUp';
import {Auth} from '../Constanse'
import loginApi from '../api/login'



function* addSignUpData(action){
    try{
        const response = yield call(signUpApi ,action.data)
        localStorage.setItem(
            'userData',
            JSON.stringify({ userId: response.data.result._id, token: response.data.token})
          )
     
    }catch(e){

    }
}
function* sendLoginData(action){

  try{
   const response = yield call(loginApi, action.data)  
        
    if(response && response.data.token){
      localStorage.setItem(
        'userData',
        JSON.stringify({ userId: response.data.user._id, token: response.data.token})
        
      )
      
     }
  }catch(e){
    return e
  }
}

export const authSaga=[
   takeEvery(Auth.ADD, addSignUpData),
   takeEvery(Auth.GET, sendLoginData),

  

]



