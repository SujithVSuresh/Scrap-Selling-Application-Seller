import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const AccountScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <TouchableHighlight onPress={() => navigation.navigate('AccountInformationScreen')}>
      <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Account information</Text>
        <Text style={{fontSize:hp('2.1')}}>See your account information like your name and phone number.</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('MyOrdersScreen')}>
      <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Orders</Text>
        <Text style={{fontSize:hp('2.1')}}>See all your pending and completed orders.</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('PickupAddressSelectorScreen', {"pathName":"notSellPath"})}>
      <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Addresses</Text>
        <Text style={{fontSize:hp('2.1')}}>View, edit or delete all your pickup addresses.</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight>
      <View style={{backgroundColor:"white", padding:8, minHeight:hp('10')}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Deactivate Account</Text>
        <Text style={{fontSize:hp('2.1')}}>Find out how you can deactivate your account.</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight  onPress={() => handleLogout()}>
      <View style={{backgroundColor:"white", padding:8, justifyContent:"center", minHeight:hp('8')}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600", color:"red"}}>Logout</Text>
      </View>
      </TouchableHighlight>
      
    </View>
  )
}

export default AccountScreen