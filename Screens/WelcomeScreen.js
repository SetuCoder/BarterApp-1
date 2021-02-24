import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class WelcomeScreen extends React.Component{

constructor (){
     super()
     this.state = {
         emailId : '',
         password: ''
     }
}

userSignUp = (emailId, password)=> {

    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
       return Alert.alert("User Added Successfully.") 
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })

}

userLogin = (emailId, password)=> {

    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
       return Alert.alert("Login Success.") 
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })

}

    render(){
       return ( 
           <View style={styles.container}>
               <View>
                  <Text style={styles.title}>
                     Barter App
                  </Text>
               </View>

        <Image source={require('../assets/welcomeIcon.png')} style={{resizeMode: "contain",height:260,width:265,marginLeft:60}} alt="Welcome icon"/>
                 
          <TextInput style={styles.loginBox} 
          placeholder="abc@example.com"
          keyboardType='email-address'
          onChangeText={(text)=>{
              this.setState({
                  emailId: text
              })
          }}
          />

      

        <TextInput style={styles.passwordBox} 
          placeholder="Enter Password"
          secureTextEntry = {true}
          onChangeText={(text)=>{
              this.setState({
                  password: text
              })
          }}
          />
          
        <TouchableOpacity style={styles.button1} onPress={()=>{
                    this.userLogin(this.state.emailId,this.state.password)
                }}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button2, {marginBottom:35, marginTop:35}]} onPress={()=>{
              this.userSignUp(this.state.emailId,this.state.password)
          }}>
            <Text style={styles.buttonText}>
                Sign Up
            </Text>
          </TouchableOpacity>

                  <View>

               </View>

           </View>
       )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:50,
      backgroundColor:'#43c7a1'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:50,
      marginLeft:69,
      marginTop:30,
      paddingTop:5,
      color : '#FEFA9C'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#99e566',
      fontSize: 20,
      marginLeft:45,
      marginBottom:30,
      marginTop:20
    },
    passwordBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#99e566',
        fontSize: 20,
        marginLeft:45,
        marginTop: 3,
      },

    button1:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#EF5F36",
      marginLeft:45,
      shadowColor: "#000",
      marginBottom:-10, marginTop:40,
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    button2:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#EF5F36",
        marginLeft:45,
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
      
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })