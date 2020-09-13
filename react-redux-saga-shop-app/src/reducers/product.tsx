
import {Product} from '../Constanse'
const product = (state= [], action) => {

    switch(action.type){
        case Product.GET:
            return state;
        case Product.ADD:
            return state;
        case Product.RECIEVE:
            return action.payload
        default : return state;
    }
}

export default product