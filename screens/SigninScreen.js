import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useState, useContext, useEffect,} from 'react'
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { login } from '../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';


const SigninScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const userLoginInfo = useSelector(state => state.userLogin)
  const {userInfo, loading} = userLoginInfo
  console.log("ooi", userInfo)



  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");


  const handleSignin = () => {
    console.log(phoneNumber, password)
    dispatch(login(phoneNumber, password))
  }

  
  return (
    <View style={{flex:1, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
      {/* <Text style={{fontSize:hp('7'), fontWeight:"800", marginBottom:15, color:"darkblue"}}>ScrapDeal</Text> */}
      <TextInput onChangeText={text => setPhoneNumber(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white",  borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} 
        placeholder="Phone Number"
        keyboardType="number-pad"></TextInput>

      <TextInput onChangeText={text => setPassword(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white",  borderBottomWidth: 0.5, borderColor:"gray", padding: 10,}} secureTextEntry={true} placeholder="Password"></TextInput>
     
      <TouchableOpacity disabled={!phoneNumber && !password && true} onPress={() => handleSignin()} style={{height: hp('7.5'), width:wp('90'), margin: 10, backgroundColor:"dodgerblue", borderRadius:8, justifyContent:"center", alignItems:"center"}}>
      {(loading) ? (
          <ActivityIndicator />
      ) : (
        <Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Signin</Text>
      )}
      
      </TouchableOpacity>
      
      <Text style={{color:"dodgerblue", marginBottom:5}}>Forget password?</Text>
      
      <Text >or</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')} style={{height: hp('6'), minWidth:wp('50'), paddingHorizontal:10, backgroundColor:"#e7eae5", borderRadius:10, marginTop:10, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontWeight:"400"}}>Create an account !</Text>
    </TouchableOpacity>
 

    </View>
  )
}

export default SigninScreen