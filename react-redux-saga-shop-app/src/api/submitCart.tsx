
import axios from 'axios'
import {auth} from '../Routes/middleware/checkAuth'

export const submitCartApi = async (data) =>{
    try{
        let config = {
            headers: {
                Authorization: 'Bearer ' + auth().token
            }
          }
          
    
        const response = await axios.put('http://127.0.0.1:9000/cart', data,config )

        return response;
    }catch(e){
         return e
  }


}
