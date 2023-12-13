
import React, { useState } from "react";
import { View, StyleSheet,ImageBackground,SafeAreaView,Text,Image,Dimensions  ,TouchableOpacity,} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import SelectDropdown from 'react-native-select-dropdown';
import { Checkbox } from "react-native-paper";

const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'LITRO',
  value: 'LITRO'
}, {
  id: '2',
  label: 'LAUGFS',
  value: 'LAUGFS'
}]

const distric = ["Polonnaruwa", "Anuradhapura", "colombo", "kaluthara"]
const area = ["polonnaruwa", "madirigiriya", "hingurakgoda", "dehiaththakandiya"]

export default function Dashbord({navigation}) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  const Find=()=>navigation.navigate('Details')
  function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
  }
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
        <View style={styles.dash}>
          <View style={styles.dash1}>
          <View style={styles.radiogas}>
            <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
          </View>
          <View style={styles.drop1}>
            <SelectDropdown
              data={distric}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
               return item
              }}
            />
          </View>
          <View style={styles.drop2}>
            <SelectDropdown
              data={area}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
               return item
              }}
            />
          </View>
            
        
            <View style={styles.checkbox}>
              <View style={styles.check}>
                <Checkbox/>
              </View>
                <Text style={styles.checktext}>5KG</Text>
              <View style={styles.check}>
                <Checkbox style={styles.check}/>
              </View>
                <Text style={styles.checktext}>12.5KG</Text>
              <View style={styles.check}>
                <Checkbox style={styles.check}/>
              </View>
                <Text style={styles.checktext}>35.5KG</Text>
            </View>
            
          </View> 

          </View> 
       </View> 
            <View style={styles.butbox} >  
              <TouchableOpacity style={styles.but}
              onPress={Find}>
                 <Text style={styles.find_button}>Find Available places</Text>
              </TouchableOpacity>
          </View>
      <View style={styles.text3}>
          <Text style={styles.but3}>Contact Us</Text>
          <Text style={styles.connum}>0785808418</Text>
      </View>
      
      
      
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


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    color:'#fff'
    
    
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
 
 
  
  View2img:{
    position:'absolute',
    opacity:0.4,
    width:imgy-y,
    height:imgx-(3.5*x),
    
  },
 
 
  but3:{
    fontSize:x/3,
    paddingLeft:(y/3),
    color:'#fff'

  },
  
  text3:{
    flex:1,
    marginBottom:-20
    //backgroundColor:'green',
  },
  connum:{
    fontSize:x/4,
    paddingLeft:(y+y),
    color:'#fff'

  },
  
  dash1:{
    backgroundColor:'#fff',
    borderRadius:15,
    height:height-(12*y)
  },
  

  dash:{ 
    paddingTop:x,
  },

  checkbox:{
    backgroundColor:'#fff',
    width:width-(3*x)+(x/6),
    paddingTop:(x/2)-(x/3),
  },
  checktext:{
    marginLeft:x+(x/2),
    marginTop:-((x/2)-(x/3)),
    fontSize:((x/2)-(x/3)),
  },
  check:{
    paddingLeft:width-(x*5)+(x/2)
  },
  radiogas:{
    paddingTop:((x/2)-(x/3))
  },
  drop1:{
    paddingTop:((x/2)-(x/3)),
  },
  drop2:{
    paddingTop:((x/2)-(x/3)),
  },
  but:{
    backgroundColor:'lightgreen',
    width:(x*3),
    height:(x/2),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15, 
       
    
  },
  find_button:{
    color:'#000',
    fontSize:18,
  },
  butbox:{
    marginLeft:x+(x/3),
    marginBottom:y/2,
    
  },
  
  

},

);