import React from 'react';
import{
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import AppIcon from '../component/AppIcon';
const Home=({navigation}) => {
    return(
        <View style={styles.container}>
            <AppIcon/>
           <View style={styles.header}>
               <Image style={styles.image}
               source={require('../images/watch1.png')}
               /> 
               <TouchableOpacity style={styles.searchbar}>
                    <TextInput>
                        Search Here!
                    </TextInput>
               </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>{navigation.navigate('Cart')}}>
                    <Image style={styles.cart}
                        source={require('../images/g4.png')}
                    />
                </TouchableOpacity>
                </View> 
            <View style={styles.boundary}/>
                <ScrollView>
                    <View style={styles.body}>
                        <TouchableOpacity
                        style={styles.menulist}
                        />
                        <Image style={styles.menuimage}
                        source={require('../images/g.png')}/>
                        <Text>
                            Premium watch for mens
                            Price: 750 
                        </Text>
                        <Text>
                            Product details: 42mm formal watch for mens
                        </Text>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Cart')}}>
                            <Text>
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.menuimage}
                            source={require('../images/g1.png')}/>
                        </TouchableOpacity>
                        <Text>
                            Premium watch for mens
                            Price: 599
                        </Text>
                        <Text>
                            Product details: 38/40 mm formal watch for mens 
                        </Text>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Cart')}}>
                            <Text>
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.menuimage}
                            source={require('../images/g2.png')}/>
                        </TouchableOpacity>
                            <Text>
                                Premium watch for mens 
                                Price: 699
                            </Text>
                            <Text>
                                Product details: 40mm formal watch for mens
                            </Text>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Cart')}}>
                                <Text>
                                    Add to Cart
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.menuimage}
                            source={require('../images/g3.png')}/>
                        </TouchableOpacity>
                        <Text>
                            Premium watch for women
                            Price: 799
                        </Text>
                        <Text>
                            Product details: 38mm formal watch for women
                        </Text>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Cart')}}>
                            <Text>
                                Add To cart
                            </Text>
                        </TouchableOpacity>
                        <Button
               onPress={()=>{navigation.navigate('Login')}}
               title='Logout'
               color={'darksalmon'}
               />
                    </View>
                </ScrollView>
        </View>
    )
}
export default Home;
const styles=StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0%',
        height: 820,
    },

    header: {
        flexDirection: 'row',
        margin: '5',
        backgroundColor: 'green'
    },

    image: {
        height: 50,
        width: 50,
        borderRadius: 10
    },

    searchbar: {
        marginLeft: 10,
        borderColor: 'darksalmon',
        backgroundColor: 'darksalmon',
        borderWidth: 1,
        width: 270,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    boundary: {
        borderBottomColor: 'black',
        borderBottomWidth: 10,
    },

    menulist:{
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'brown'
        
    },
    
    menuimage:{
        width:350,
        height:160,
        margin:25,
        borderRadius: 20
    },
    menutext:{
        fontWeight: '300',
        backgroundColor: 'black',
        color: 'black',
        width: 100,
        height: 20,
        fontSize: 20,
        marginLeft: 170
    },

    header:{
        flexDirection: 'row',
        margin: 5
    },

    cart:{
        marginLeft: 10,
        height: 50,
        width: 50
    },
    body:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkslategray',
        borderColor: 'darksalmon',
        borderWidth: 10,
        borderTopStartRadius: 80,
        borderTopEndRadius: 80,
        borderBottomStartRadius: 80,
        borderBottomEndRadius: 80,
        borderRightWidth: 20
    }
    
})