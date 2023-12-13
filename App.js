import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './App/Main'
import SignIn from './App/Signin'
import Dashbord from './App/Dashbord'
import Details from './App/Details'
import Register from './App/Register'

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: '#fff'
            }
          }}
        >
          <Stack.Screen
            name="Main Screen"
            component={Main}
            options={{ title: 'Main'}}
            
          />
          <Stack.Screen name="MainScreen" title="Mai_n" component={Main}/>
          <Stack.Screen name="SignIn" title="SignIn" component={SignIn}/>
          <Stack.Screen name="Dashbord" title="Dashbord" component={Dashbord}/>
          <Stack.Screen name="Details" title="Details" component={Details}/>
          <Stack.Screen name="Register" title="Register" component={Register}/>
          
        </Stack.Navigator>

      </NavigationContainer>
  );
}