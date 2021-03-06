import React, {Component}from 'react';
import { StyleSheet,TouchableOpacity, View ,Text, ScrollView,ImageBackground,Linking} from 'react-native';
import {Card} from 'react-native-elements';
import {FontAwesome, Entypo, FontAwesome5, Ionicons} from '@expo/vector-icons';
import {Spacer} from '../components/spacer';
import LogOut from '../screens/logOut';





const ProductScreen = ({navigation}) => {

    return ( 
<ImageBackground source={require('../assets/backgroundColor.jpg')} style={Styles.container}>
<ScrollView>
<Card containerStyle={{height: 800,width:325,marginBottom:100 , marginTop:50,borderRadius: 10,backgroundColor: 'rgba(205, 199, 199, .4)'}}>
 <View style={Styles.spacing}>
     <Text style={Styles.title}>Services</Text>
     <Spacer/>
    <TouchableOpacity onPress={()=>navigation.navigate("CarDetail")}>
    <View style={Styles.background}>
    <FontAwesome name='car' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Vehicle Detailing</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity onPress={()=>navigation.navigate("LawnCare")}>
    <View style={Styles.background}>
    <Entypo name='flower' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Commercial Lawn Care</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    <TouchableOpacity onPress={()=>Linking.openURL('http://timbumperllc.zohosites.com/')}>
    <View style={Styles.background}>
    <FontAwesome5 name='pills' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Pharmaceuticals</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    {/* <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='credit-card' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Credit Repair</Text>
    </View>
    </TouchableOpacity> */}
    <TouchableOpacity onPress={()=>Linking.openURL('https://moefitness33.com/')}>
    <View style={Styles.background}>
    <Ionicons name='md-fitness' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Personal Fitness</Text>
    </View>
    </TouchableOpacity>
        {/* <Spacer/> */}
    {/* <TouchableOpacity>
    <View style={Styles.background}>
    <Entypo name='home' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Brokerage with Saks</Text>
    </View>
    </TouchableOpacity> */}
        <Spacer/>
    <TouchableOpacity onPress={()=>Linking.openURL('https://www.catchthesehands-massage.com/')}>
    <View style={Styles.background}>
    <Entypo name='hand' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Massage with Catch These Hands</Text>
    </View>
    </TouchableOpacity>
        <Spacer/>
    {/* <TouchableOpacity>
    <View style={Styles.background}>
    <FontAwesome name='scissors' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Grooming with New York</Text>
    </View>
    </TouchableOpacity> */}
        {/* <Spacer/> */}
    <TouchableOpacity onPress={()=>Linking.openURL('http://yalajets.com/')}>
    <View style={Styles.background}>
    <Entypo name='aircraft' size={24} style={Styles.icons}/>
    <Text style={Styles.name}>Luxury Private Flights with Yala Jets</Text>
    </View>
    </TouchableOpacity>
</View>
<Spacer/>

        <LogOut/>
        </Card>
        </ScrollView>
        </ImageBackground>

    )
};
ProductScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
const Styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    image1:{
        width: 175,
        height:175,
        marginTop:200 
    },
    background: {
        backgroundColor: '#d3d3d3',
        height: 80,
        borderRadius: 10,
        marginHorizontal:19,
        borderWidth: 1,
        shadowRadius:3,
        shadowColor: 'black'
    },
    name: {
        fontSize: 15,
        fontStyle: ('new times roman', 'italic'),
        alignSelf: 'center'
        
    },
    icons:{
        paddingLeft:5,
        paddingTop: 5
    },
    title: {
        fontSize:26,
        fontFamily: 'Cochin',
        alignSelf: 'center',
        marginTop: 15,
        color: 'black'
    }

})

export default ProductScreen;