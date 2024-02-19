import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () =>{

    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;