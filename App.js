/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { Button, View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { AthenticationScreen } from './src/AthenticationScreen'; 
 import { InputOTPScreen } from './src/InputOTPScreen';
 import { HomeScreen } from './src/HomeScreen';
 
 const Stack = createNativeStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Athentication">
         <Stack.Screen 
         name="Athentication" 
         component={AthenticationScreen} />
         <Stack.Screen 
         name="InputOTP" 
         component={InputOTPScreen} 
         options={{title: 'Input OTP', headerBackTitle: ''}}
         />
         <Stack.Screen 
         name="Home" 
         component={HomeScreen}
         options={{title: 'Home', headerBackTitle:  ''}} 
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;
 