
import React, { useState } from "react";
import { ImageBackground,TextInput,StyleSheet, Text, View, Image,SafeAreaView,Dimensions,TouchableOpacity} from 'react-native';



export default function SignIn({navigation}) {
  const signinpage =() =>navigation.navigate('Dashbord')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground style={ styles.imgBackground }  resizeMode='cover' source={require('../assets/bg.jpg')}>
      <View style={styles.container}>
        <View style={styles.View1}>
          <Text style={styles.text1}>SLGAS CRACKER</Text>
        </View>
        <View style={styles.View2}>
          <Image style={styles.View2img}source={require('../assets/bggas.png')}/>
          <Text style={styles.text2}>SIGN IN</Text>
          <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
          </View>
 
          <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
          </View>
          
          <View style={styles.logbox}>
          <TouchableOpacity style={styles.loginBtn}
          onPress={signinpage}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.fogbox}>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          </View>
    </View>
    </View>
    </ImageBackground>
  );
}



const { height } = Dimensions. get('window');
const { width } = Dimensions. get('window');

//this part for get sizr for manage alignment of android and IOS
const x=(height*10)/100
const y=(width*10)/100
const imgx=height
const imgy=width

console.log(x)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  
  imgBackground:{
    width: '100%',
    height: '100%',
    flex: 1
  },
  
  View1:{
    flex:1.5,
    //backgroundColor:'red',
    alignItems:'center',
   
    
  },
  text1:{
    paddingTop:x,
    fontSize:x/3,
    fontWeight:'bold',
    color:'#fff'
  },
  View2:{
    flex:5,
    //backgroundColor:'blue',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    
  },
  text2:{
    fontSize:x/3,
    fontWeight:'bold',
    marginTop:x,
    marginBottom:x,
    color:'#fff'
    
  },
  
  View2img:{
    position:'absolute',
    opacity:0.4,
    width:imgy-y,
    height:imgx-(3.5*x),
    
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 45,
 
  },
 
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'lightblue'
  },
 
  loginBtn: {
    width: "20%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    backgroundColor: "lightblue",
  },
  logbox:{
    width:400,
    marginLeft:(width-x),
    marginTop:50
  },
  fogbox:{
    marginTop:20
  }
  
  
  
  
  
  
  

});
