
import axios from 'axios'

export const signUpApi= async (data) =>{
    try{
   
        const response = await axios.put('http://127.0.0.1:9000/auth', data)

        return response;
    }catch(e){
         return e
  }


}
