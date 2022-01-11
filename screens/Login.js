import React, { useState } from 'react';
import{
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import AppIcon from '../component/AppIcon';
import { getData } from '../Utility/Utility';
const Login = ({navigation}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const getuserdata=async()=>{
      let params = {
          email : email,
          password : password,
      }
              let value = await getData(email+'', params, 'Stored data')
              console.log(value);
          }
return(
  <View style={styles.abc}>
    <AppIcon/>
    <TextInput
    color= {'black'}
    placeholder='Email'
    onChangeText={value => setEmail(value)}
    />

    <TextInput
    color= {'black'}
    placeholder='Password'
    onChangeText={value => setPassword(value)}
    />

    <Button
    onPress={getuserdata}
    onPress={()=>{navigation.navigate('Home')}}
    title='Login'
    color={'brown'}
    />

    <Button
    onPress={()=>{navigation.navigate('SignUp')}}
    title='Signup'
    color={'brown'}
    />
    <Button
    onPress={()=>{navigation.navigate('ForgotPassword')}}
    title='ForgotPassword?'
    color={'brown'}
    />

  </View>
)
};
export default Login;
const styles = StyleSheet.create({
  abc: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'burlywood',
      marginTop: '0%',
      height: 800,
      borderTopStartRadius: 200,
      borderBottomEndRadius: 200,
      borderColor: 'brown',
      borderWidth: 10,
      borderBottomWidth: 50
      }
})