import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import Icon from "react-native-vector-icons/AntDesign";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () =>{
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>

                <View style={styles.contentHeader}>

                    <Text style={styles.title}>Seja bem vindo(a)!{'\n'}A wallet App!</Text>
                    <Text style={styles.description}>Sing in with:</Text>

                    <View style={styles.viewBtn}>
                        <TouchableOpacity style={[styles.btn, {backgroundColor:"#000", borderWidth: 5, borderColor: "#fff"}]}>
                            <Icon name="google" size={30} color="#db4437"/>
                            <Text style={{fontSize: 16, fontWeight: "500", color:"#f4b400"}}>oo<Text style={{color:"#0f9"}}>gl</Text><Text style={{color:"#4285fa"}}>e!</Text></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn, {backgroundColor:"#4368c7"}]}>
                            <Icon name="facebook-square" size={30} color="#fff"/><Text style={{fontSize: 16, fontWeight: 'bold', color: "#fff", padding: 10}}>facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>    

                <View style={styles.contentBody}>
                    <Input/>
                </View>

                <View style={styles.contentFooter}>
                    <TouchableOpacity style={styles.btnFooter}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={{fontWeight: "300"}}>Você já possui uma conta ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{color: "#81C2FF"}}>Criar uma conta!</Text>
                    </TouchableOpacity>
                </View>
         
            </View>
        </SafeAreaView>
    )
}
export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description:{
        marginTop: 60,
        fontSize: 15,
        fontWeight: '300'
    },
    viewBtn:{
      flexDirection: 'row',
    },
    btn:{
        flexDirection: 'row',
        width: 130,
        height: 60,
        marginTop: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        shadowColor: "#000",
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
    },
    contentHeader:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    contentBody:{
        alignItems: "center",
    },
    contentFooter:{
        alignItems: "center",
    },
    btnFooter:{
        marginTop: 35,
        width: 155,
        backgroundColor: "#5b259f",
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        borderRadius: 15,
        shadowColor: "#000",
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          marginBottom: 20
    },
    btnText:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold"
    },
    footer:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
}) 