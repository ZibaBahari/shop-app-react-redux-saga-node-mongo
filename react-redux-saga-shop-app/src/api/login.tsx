
import axios from 'axios'



const loginApi= async (data) =>{

    try{
        const response = await axios.post('http://127.0.0.1:9000/auth', data)


return response
    }catch(e){
         return e
  }


}
export default loginApi