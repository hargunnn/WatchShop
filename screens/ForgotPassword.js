import React from 'react';
import{
    View,
    StyleSheet,
    Text,
    TextInput,
    Button
} from 'react-native';
const ForgotPassword = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                What's Your Father's name ?
            </Text>

            <TextInput>
                Answer
            </TextInput>

            <Text>
                What's your mobile number?
            </Text>

            <TextInput>
                Answer
            </TextInput>

            <Button
            onPress={()=>{navigation.navigate('Login')}}
            title={'ResetPassword'}
            color={'darksalmon'}
            />

        </View>

    );
}
export default ForgotPassword;
const styles=StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
        marginTop: '0%',
        height: 800
    }
})
