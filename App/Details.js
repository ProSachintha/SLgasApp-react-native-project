
import React, { useState } from "react";
import { View, StyleSheet,ImageBackground,SafeAreaView,Text,Image,Dimensions,TextInput,TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['CHOICE', 'SHOP', 'QUAN', 'U.PRICE'],
  tableTitle: ['01', '02', '03', '04','05','06','07','08','09','10'],
  tableData: [
    ['shop 1', '20', '4200'],
    ['shop 2', '102', '4200'],
    ['shop 3', '48', '4200'],
    ['shop 4', '65', '4200'],
    ['shop 5', '70', '4200'],
    ['shop 6', '300', '4300'],
    ['shop 7', '45', '4300'],
    ['shop 8', '10', '4350'],
    ['shop 9', '35', '4350'],
    ['shop 10', '18', '4350'],
   
  ],
};

export default function Details() {
  const [choice, setchoice] = useState("");
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
          <View style={styles.tabview}>
              <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                  <Row
                    data={CONTENT.tableHead}
                    flexArr={[1, 2, 1, 1]}
                    style={styles.head}
                    textStyle={styles.text}
                    
                  />
                  <TableWrapper style={styles.wrapper}>
                    <Col
                      data={CONTENT.tableTitle}
                      style={styles.title}
                      heightArr={[28, 28]}
                      textStyle={styles.text}
                    />
                    <Rows
                      data={CONTENT.tableData}
                      flexArr={[2, 1, 1]}
                      style={styles.row}
                      textStyle={styles.text}
                    />
                  </TableWrapper>
                </Table>
              </View>
          </View>
          <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Choice."
                placeholderTextColor="#fff"
                onChangeText={(choice) => setchoice(choice)}
              />
          </View>
          <View style={styles.logbox}>
          <TouchableOpacity style={styles.loginBtn}
          onPress={()=>alert('sucess')}>
            <Text style={styles.loginText}>BUY</Text>
          </TouchableOpacity>
          </View>
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
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71',zIndex:1, },
  row: { height: 28 ,backgroundColor:(128,128,128),},
  text: { textAlign: 'center', color:'#fff' },
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
  tabview:{
    width:width-x,
    height:800
  },
  TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 20,
    marginTop:-100,
    color:'#fff',
    borderRadius:25
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
    marginTop:-10
  },
  

},

);