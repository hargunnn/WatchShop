import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AppIcon from '../component/AppIcon';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome')
        }, 3000);
    }, [])
    return (
        <View style={styles.splashimg}>
            <AppIcon />
        </View>
    );
}
export default Splash;
const styles = StyleSheet.create({
    splashimg: {
        flex: 1,
        backgroundColor: 'bisque',
        justifyContent: 'center',
        alignItems: 'center',
    },
});