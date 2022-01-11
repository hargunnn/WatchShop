import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Booking from './screens/Booking';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Booking' component={Booking}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;