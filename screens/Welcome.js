import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import AppIcon from '../component/AppIcon';
const Welcome = ({navigation}) => {

    return(
        <View style = {styles.container}>
            <AppIcon/>
            <Text>
                Don't have an Account? SignUp here:)
            </Text>

            <Button
            onPress={()=>{navigation.navigate('SignUp')}}
            title='SignUp'
            color={'peachpuff'}
            />

            <Text>
                Already have an account? Login here:)
            </Text>

            <Button
            onPress={()=>{navigation.navigate('Login')}}
            title='Login'
            color={'peachpuff'}
            />
        </View>

    );
}
export default Welcome;
const styles=StyleSheet.create({
    container:{
        //flex: 1,
        backgroundColor: 'brown',
        height: 800,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'peachpuff',
        borderTopStartRadius: 200,
        borderBottomEndRadius: 200,
        borderStartWidth: 10,
        borderEndWidth: 10,
        borderTopWidth: 10,
        borderBottomWidth: 50
    }
})