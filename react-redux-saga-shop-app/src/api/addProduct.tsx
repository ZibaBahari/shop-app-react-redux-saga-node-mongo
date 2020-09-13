
import axios from 'axios'

export const addProductApi = async (data) =>{
    try{
        const dataSent = new FormData() 
        data['Image'].forEach((file) => dataSent.append('Image', file));
        dataSent.append('Name', data['Name'])
        dataSent.append('Description', data['Description'])
        dataSent.append('Price', data['Price'])
        
     
        const response = await axios.put('http://127.0.0.1:9000/admin/product', dataSent)

        return response;
    }catch(e){
         return e
  }


}
