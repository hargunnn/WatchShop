import React, { useState } from 'react';
import{
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import { setData } from '../Utility/Utility';
import AppIcon from '../component/AppIcon';
const Signup = ({navigation}) => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [mobileNumber, setMobileNumber] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const setuserdata=async()=>{
  let params = {
      firstName : firstName,
      lastName : lastName,
      mobileNumber : mobileNumber,
      email : email,
      password : password
  }
          let user = await setData(email+'', params, 'Stored data')
          console.log(user);
      }

return(
  <View style={styles.abc}>
    <AppIcon/>
    <TextInput
    placeholder='FirstName'
    onChangeText={value => setFirstName(value)}
    />

    <TextInput
    placeholder='LastName'
    onChangeText={value => setLastName(value)}
    />
    
    <TextInput
    placeholder='MobileNumber'
    onChangeText={value => setMobileNumber(value)}
    />

    <TextInput
    placeholder='Email'
    onChangeText={value => setEmail(value)}
    />

    <TextInput
    placeholder='Password'
    onChangeText={value => setPassword(value)}
    />

    <Button
    onPress={setuserdata}
    onPress={() =>{navigation.navigate('Login')}}
    title='SIGN UP'
    color={'darksalmon'}
    />

  </View>
)
}
export default Signup;
const styles = StyleSheet.create({
  abc: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'darkslategray',
      marginTop: '0%',
      height: 800,
      borderTopEndRadius: 200,
      borderBottomStartRadius: 300,
      borderColor: 'peachpuff',
      borderWidth: 10,
      borderBottomWidth: 50
      }
})