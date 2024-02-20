import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

// Biel aqui vamos tipar as rotas que teremos na aplicação.
type AppRoutes = {
    login: undefined
    signup: undefined
}

// Biel aqui exportaremos o tipo AppNavigatorRoutesProps.
export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

// Biel aqui iremos dizer ao createNativeStackNavigator qual tipo ele irá esperar receber.
const AuthStack = createNativeStackNavigator<AppRoutes>();

const AuthRoutes: React.FC = () =>{

    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <AuthStack.Screen name="signup" component={SignUp} options={{headerShown: false}}/>
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;