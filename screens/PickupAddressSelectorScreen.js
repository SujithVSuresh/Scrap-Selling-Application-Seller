import { View, Text, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { useNavigation } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddresses } from '../redux/actions/sellRequestsActions';
import { SELLREQUESTS_ADD_SELECTED_ADDRESS } from '../redux/constants/sellRequestsConstants';



const PickupAddressSelectorScreen = ({navigation, route}) => {
  const { pathName } = route.params;

  const dispatch = useDispatch()

  const pickupAddresses = useSelector(state => state.allAddresses)
  const {addresses, loading} = pickupAddresses

  const selectedPickupAddress = useSelector(state => state.createSellRequest)
  const {pickupaddress, items} = selectedPickupAddress

  console.log("op", pickupaddress, items)



  

  useEffect(() => {
    dispatch(getAllAddresses())
    
}, [])

const addSelectedAddressFunc = (address) => {
  console.log("address:", address)
  dispatch({
    type:SELLREQUESTS_ADD_SELECTED_ADDRESS,
    payload:address
  })
}

  
  return (

      <View style={{backgroundColor:"white", flex:1, paddingHorizontal:10}}>
        <ScrollView >
          <View style={{flexDirection:"row", flexWrap:"wrap"}}>

        {addresses.map((address, index) => (
     <Pressable
     key={index}
      onPress={() => pathName==="notSellPath" ? navigation.navigate('AddNewAddressScreen', {"address":address}) : addSelectedAddressFunc(address)}
      style={{width:"100%", 
      minHeight:hp('8'), 
      backgroundColor: address.id===pickupaddress.id ? "#e7eae5" : "white", 
      flexDirection:"row",
      borderWidth:2,
      borderRadius:10,
      borderColor:"lightgray",
      marginTop:10,
      padding:10,
      }} 
          >

            <View style={{flex:5}}>
     
             <Text style={{fontWeight:"400", marginBottom:3, fontSize:hp('2.3')}}>{address.addressName}</Text>
            <View>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{address.houseOrFlatNo}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{address.landmark}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{address.city}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{address.village} - {address.postalCode}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Phone number: {address.phoneNumber}</Text>
            </View>

            </View>


          </Pressable>


        ))}
        </View>

        </ScrollView>

   {pathName==='sellPath' && (
            <View style={{alignItems:"center", backgroundColor:"white",  width:'100%', justifyContent:"center", height:"10%"}}>
            <Pressable disabled={false} onPress={(e) => navigation.navigate("CheckoutScreen")} style={{justifyContent:"center", alignItems:"center", width:"90%", height:"80%", backgroundColor:"seagreen", borderRadius:10, zIndex:1}}>
              <Text style={{color:"white", fontSize:hp('2.5'), fontWeight:"600"}}>Next</Text>
             </Pressable>
             </View>
   )}   
      </View>

  )
}

export default PickupAddressSelectorScreen