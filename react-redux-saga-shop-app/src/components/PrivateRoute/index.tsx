import React from "react"
import { RouteProps, Route , Redirect} from "react-router";
import {auth} from '../../Routes/middleware/checkAuth'

    interface IProps extends RouteProps {
        path: string;
        props?: any;
        component: React.ElementType;
    }
    const PrivateRoute: React.FC<IProps> = ({
        component: Component,
        props: authenticatedComponentProps,
        ...rest
        
    }) => {
return (
    <Route
    {...rest}
    render={props => {
  
        // @ts-ignore
        // const redirect = getRedirectPath(props);
        // @ts-ignore
          
        
            return   auth() ? (
                
                <Component {...props}  />
            
          
        ) : (
               <Redirect to="/login"/>
            );
    }}
exact />
)
}
export default PrivateRoute