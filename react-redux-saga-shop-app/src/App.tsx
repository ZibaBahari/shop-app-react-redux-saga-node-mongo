import React from "react";
import { BrowserRouter , Switch, Route,Redirect } from "react-router-dom"
// Shared components
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute"; 

// Local components
import SignUpComponent from "./screens/Auth/screens/signup";
import loginComponent from "./screens/Auth/screens/login";
import Dashboard from "./screens/Dashboard"; 
import Admin from "./screens/Admin"; 
import AddProduct from "./screens/Admin/screens/AddProduct"; 
import ListProduct from "./screens/Admin/screens/ListProduct"; 

function App() {
 

  return (
    <div className="App">
<BrowserRouter  >
  

   <Switch>
     <Route path="/" component={Dashboard} exact/>
     < PublicRoute path="/signup" component={ SignUpComponent} />
     < PublicRoute path="/login" component={ loginComponent} />
     <PrivateRoute path="/admin" component={ Admin} />
     <PrivateRoute path="/add-product" component={AddProduct}  />
     <PrivateRoute path="/list-product" component={ListProduct} />
     <Redirect to="/" />
   </Switch>
</BrowserRouter>

           
    </div>
  );
  
}

export default App;
