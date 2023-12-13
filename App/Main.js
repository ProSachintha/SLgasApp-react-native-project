import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ImageBackground,TextInput,StyleSheet, Text, View, Image,SafeAreaView,Dimensions,TouchableOpacity} from 'react-native';


export default function Main({navigation}) {
  const signinpage =() =>navigation.navigate('SignIn')
  const signuppage =() =>navigation.navigate('Register')
  
  return (
    
    <ImageBackground style={ styles.imgBackground }  resizeMode='cover' source={require('../assets/bg.jpg')}>
      <SafeAreaView style={styles.container}>
      <View style={styles.View1}>
        <Text style={styles.text1}>SLGAS CRACKER</Text>
      </View>
      <View style={styles.View2}>
        <Image 
        style={styles.View2img}
        source={require('../assets/bggas.png')}
        />
        <Text style={styles.text2}>Welcome To SLgasApp !!</Text>
        <Text style={styles.text21}>You Can Find Nearest Place of Available Gas Tank and Order it Online</Text>
        
        <View  style={styles.butall}>
        <View style={styles.butbox}>
        <TouchableOpacity
        onPress={signinpage}>
          
          <Text style={styles.but1}>Sign In</Text>
          
        </TouchableOpacity>

        <TouchableOpacity
        onPress={signuppage}>
          <Text style={styles.but2}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        </View>

      </View>
      <View style={styles.text3}>
          <Text style={styles.but3}>Contact Us</Text>
          <Text style={styles.connum}>0785808418</Text>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
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
    marginTop:x-(x/2),
    color:'#fff'
    
  },
  text21:{
    fontSize:x/4,
    fontWeight:'bold',
    paddingTop:x,
    textAlign:'center',
    color:'#fff'
  },
  
  View2img:{
    position:'absolute',
    opacity:0.4,
    width:imgy-y,
    height:imgx-(3.5*x),
    
  },
  butall:{
    paddingTop:x+(x/2),

  },
  butbox:{
    width:y+y+y+x+x,
    height:x+x,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    
    

  },
  but1:{
    fontSize:x/2,
    color:'lightgreen',
    paddingBottom:20

  },
  but2:{
    fontSize:x/3,
    color:'lightgreen'

  },
  but3:{
    fontSize:x/3,
    paddingLeft:(y/3),
    color:'#fff'

  },
  
  text3:{
    flex:1,
    //backgroundColor:'green',
  },
  connum:{
    fontSize:x/4,
    paddingLeft:(y+y),
    color:'#fff'

  },
  
  
  
  
  
  

});
