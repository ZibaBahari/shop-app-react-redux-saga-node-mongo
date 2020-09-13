
import axios from 'axios'

export const getProductApi = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:9000/admin/product')

        return response;

    }catch(e){
        return (e)
    }
}