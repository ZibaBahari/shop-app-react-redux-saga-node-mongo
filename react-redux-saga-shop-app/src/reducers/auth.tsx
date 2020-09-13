
import {Auth} from '../Constanse'

const auth = (state= [], action) => {
console.log('uioi',action)
    switch(action.type){
        case Auth.GET:
            return state;
        case Auth.ADD:
            
            return state;
        case Auth.CHECK:
             return state;
        case Auth.SET:
            return action.payload

        default : return state;
    }
}

export default auth