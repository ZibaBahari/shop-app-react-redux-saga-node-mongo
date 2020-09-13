import React from "react"
import { RouteProps, Route , Redirect } from "react-router";
import {auth} from '../../Routes/middleware/checkAuth'
    interface IProps extends RouteProps {
        path: string;
        component: React.ElementType;
        props?: any;
        /**
         * restricted = false meaning public route
         * restricted = true meaning protected route
         */
      
    }
    const PublicRoute: React.FC<IProps> = ({
        component: Component,
      
        props: unauthenticatedRouteProps,
        ...rest
    }) => {
return (
    <Route
    {...rest}
    render={props => {
  
        // @ts-ignore
        // const redirect = getRedirectPath(props);
        // @ts-ignore
        // return rest.path === "/admin" ? (
            return (rest.path === "/signup" || rest.path === "/login") && (auth()) ? (
                <Redirect to={`/`} />
          
        ) : (
                
                <Component {...props}  />

            );
    }}
exact />
)
}
export default PublicRoute