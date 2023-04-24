import { View, Text, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const AccountInformationScreen = () => {
  const navigation = useNavigation() 

  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <TouchableHighlight onPress={() => navigation.navigate('ChangeNameScreen')}>
      <View style={{backgroundColor:"white", padding:10, minHeight:hp('10'), justifyContent:"center"}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Name</Text>
        <Text style={{fontSize:hp('2.1'), color:"gray"}}>Sujith V S</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.log('AccountInformationScreen')}>
      <View style={{backgroundColor:"white", padding:10, minHeight:hp('10'), justifyContent:"center"}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Phone</Text>
        <Text style={{fontSize:hp('2.1'), color:"gray"}}>+918590369084</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.log('AccountInformationScreen')}>
      <View style={{backgroundColor:"white", padding:10, minHeight:hp('10'), justifyContent:"center"}}>
        <Text style={{fontSize:hp('2.5'), fontWeight:"600"}}>Password</Text>
        <Text style={{fontSize:hp('2.1'), color:"gray"}}>Change password</Text>
      </View>
      </TouchableHighlight>
    </View>
  )
}

export default AccountInformationScreen