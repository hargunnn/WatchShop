import React from 'react';
import {
    View, 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import AppIcon from '../component/AppIcon';
const Cart=({navigation}) => {
    return(
        <View style={styles.container}>
            <AppIcon/>
            <View style={styles.footer}>
                <TouchableOpacity
                onPress={()=>{navigation.navigate('Booking')}}>
                    <Text>
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default Cart;
const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: 'darksalmon',
        height: 850,
        
    },

    footer:{
        backgroundColor: 'dimgray',
        fontSize: 40,
        fontFamily: 'bold',
        fontStyle: 'bold',
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical:20,
    paddingStart: 165,
    paddingEnd: 165,
    position: 'absolute',
    bottom: 30
    }
})