import React from 'react';
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute =(props) =>{
    
    return(
        <Route>
            <props.component/>
        </Route>
    )
}
export default ProtectedRoute;