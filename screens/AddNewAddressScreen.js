import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { createAddress } from '../redux/actions/sellRequestsActions';

import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const AddNewAddressScreen = ({route, navigation}) => {
  //const { coordinates } = route.params;
  //console.log("loo",coordinates)
  const dispatch = useDispatch()
  const { address, coordinates } = route.params;

  console.log("add", address, coordinates)


  const [myState, setMyState] = useState("")
  const [district, setDistrict] = useState("")
  const [city, setCity] = useState("")
  const [village, setVillage] = useState("")
  const [pincode, setPincode] = useState(null)
  const [landmark, setLandmark] = useState("")
  const [houseOrFlatNo, setHouseOrFlatNo] = useState("")
  const [phone, setPhone] = useState("")
  const [saveAs, setSaveAs] = useState("")

  useEffect(() => {
    if(Object.keys(address).length !== 0){
      setPhone(address.phoneNumber ? address.phoneNumber : "")
      setMyState(address.state ? address.state : "")
      setDistrict(address.district ? address.district : "")
      setVillage(address.village ? address.village : "")
      setCity(address.city ? address.city : "")
      setSaveAs(address.addressName ? address.addressName : "")
      setLandmark(address.landmark ? address.landmark : "")
      setPincode(address.postalCode ? address.postalCode : "")
      setHouseOrFlatNo(address.houseOrFlatNo ? address.houseOrFlatNo : "")
    }

  }, [])


  const submitHandler = () => {
    dispatch(createAddress(saveAs, landmark, houseOrFlatNo, phone, myState, district, city, village, pincode, coordinates))
    navigation.goBack()
  }
  
  return (
    <ScrollView >
    <View style={{alignItems:"center"}}>
    


<View style={{marginVertical:hp('2')}}>
  <TextInput defaultValue={myState ? myState : ""} onChangeText={text => setMyState(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="State"
   ></TextInput>
   <TextInput defaultValue={district ? district : ""} onChangeText={text => setDistrict(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="District"
   ></TextInput>
   <TextInput defaultValue={city ? city : ""} onChangeText={text => setCity(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="City"
   ></TextInput>
   <TextInput defaultValue={village ? village : ""} onChangeText={text => setVillage(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="Village"
   ></TextInput>
   <TextInput defaultValue={pincode ? pincode : ""} onChangeText={text => setPincode(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="PIN code"
  keyboardType="number-pad"></TextInput>
  <TextInput defaultValue={landmark ? landmark : ""} onChangeText={text => setLandmark(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="Landmark"
   ></TextInput>
   <TextInput defaultValue={houseOrFlatNo ? houseOrFlatNo : ""} onChangeText={text => setHouseOrFlatNo(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="House / Flat no"
   ></TextInput>

  <TextInput defaultValue={phone ? phone : ""} onChangeText={text => setPhone(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="Phone"
  keyboardType="number-pad"></TextInput>
     <TextInput defaultValue={saveAs ? saveAs : ""} onChangeText={text => setSaveAs(text)} style={{height: hp('8'), width:wp('90'), margin: 5, backgroundColor:"white", borderWidth: 0.5, borderColor:"gray", padding: 10,}} 
  placeholder="Save as"
   ></TextInput>
  <Pressable onPress={() => navigation.navigate('ChooseLocationOnMapScreen')} style={{backgroundColor:"white", height:hp('10'),margin: 5, padding:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center", borderRadius:10, width:wp('90')}}>
      <View>
      <Text style={{fontSize:hp('2.5%'), color:"gray"}}>Select location on map</Text>
      {Object.keys(coordinates).length !== 0 && <Text style={{color:"green"}}>Selected</Text>}
      </View>
      
      <Icon name="chevron-forward-outline" size={hp('3%')} />
    </Pressable>
</View>  

 


<TouchableOpacity onPress={() => submitHandler()} style={{height: hp('7.5'), width:wp('90'), margin: 0, backgroundColor:"seagreen", borderRadius:8, justifyContent:"center", alignItems:"center"}}>
{/*(isLoading) ? (
    <ActivityIndicator />
) : (
  <Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Signin</Text>
)*/} 
<Text style={{color:'white', fontSize:hp("3.5"), fontWeight:"700"}}>Add</Text>

</TouchableOpacity>


{/*errorDetails && <Text>{errorDetails}</Text>*/}
</View>
</ScrollView>
  )
}

export default AddNewAddressScreen