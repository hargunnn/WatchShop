import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const Booking = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image
            source={require('../images/g5.png')}/>
            <Text
            selectionColor={'black'}>
                Booking Successful!
            </Text>

            <TouchableOpacity
            onPress={()=>{navigation.navigate('Home')}}>
                <Text>
                    Back To Homepage
                </Text>
            </TouchableOpacity>
        </View>

    )
}
export default Booking;
const styles=StyleSheet.create({
container:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0%',
    backgroundColor: 'black',
    height: 850
}
})
