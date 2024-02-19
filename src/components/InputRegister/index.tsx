import React from "react";
import { View, StyleSheet, TextInput, ViewProps } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"

interface IContainerProps extends ViewProps{
    hasError: boolean;
    isFocused: boolean;
    isFilled: boolean
}

interface ITextContainerProps extends ViewProps{
    hasError: boolean;
    isFocused: boolean;
    isFilled: boolean
}


const InputRegister: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return(
        <View style={{width: "85%"}}>
            <View style={styles.container}>
                <Feather name="user" size={24} color="#828282" style={{marginRight: 8}}/>
                <TextInput style={styles.input} placeholder="username" value={name} onChangeText={(text) => setName(text)}/>
            </View>
            <View style={styles.container}>
                <Icon name="email" size={24} color="#828282" style={{marginRight: 8}}/>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}/>
            </View>
            <View style={styles.container}>
                <Icon name="lock" size={24} color="#828282" style={{marginRight: 8}}/>
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry/>
            </View>
        </View>
    )
}

export default InputRegister;

const styles = StyleSheet.create({
    input:{
        width: "85%",
        fontSize: 16,
        fontWeight: "bold"
    },
    container:{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10
    },
    IContainer:{
        width: 55,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
})