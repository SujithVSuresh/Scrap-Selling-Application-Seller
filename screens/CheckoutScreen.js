import { View, Text, ScrollView, Pressable, Image, ActivityIndicator, ToastAndroid } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import { createSellRequest } from '../redux/actions/sellRequestsActions';


const CheckoutScreen = ({navigation, route}) => {
  const dispatch = useDispatch()

  const sellReq = useSelector(state => state.createSellRequest)
  const {pickupaddress, items, addedSellRequest} = sellReq
  console.log("oopps",pickupaddress)

  const createSellRequestFunc = () => {
    dispatch(createSellRequest(pickupaddress.id, items))
    navigation.navigate("HomeScreen")
    ToastAndroid.show('Order request created successfully!', ToastAndroid.LONG);
  }


  return (
    <View style={{backgroundColor:"white", flex:1}}>
    <ScrollView style={{paddingHorizontal:wp('2')}}>
  <View style={{marginVertical:hp('1')}}>
  <Text style={{fontWeight:"700", marginTop:5, fontSize:hp('2.4')}}>Selected Items -</Text>
   <View style={{flexDirection:"row", flexWrap:"wrap", marginTop:5}}>
     {items.map((item, index) => (
             <View key={item.id} style={{width:"50%", height:hp('13'), justifyContent:"center", alignItems:"center"}}>

        <View key={index} style={{width:wp('46'), borderWidth:0.5, borderColor:"gray", backgroundColor:"#e7eae5", height:hp(11), flexDirection:"row"}}>
    <View style={{width:"30%", height:"100%", justifyContent:"center", alignItems:"center", }}>
      <View style={{backgroundColor:"lightgray", height:hp('5'), width:hp('5'), borderRadius:180, justifyContent:"center", alignItems:"center"}}>
        <Icon name={'checkmark-outline'} size={hp('4')}/>
      </View>
    </View>
    <View style={{width:"70%", justifyContent:"center", }}>
      <Text style={{fontWeight:"bold", marginBottom:hp('0.5')}}>{item.itemName}</Text>
      <Text style={{fontSize:hp('2')}}>{item.rate} / {item.unit}</Text>
    </View>
  </View>
  </View>
 
      
     ))}
  </View>
  </View>

{/*
  <ScrollView horizontal={true}>
    {state.selectedImages.map((image_path) => (
                  <View style={{ borderWidth:0.5, backgroundColor:"lightgray", margin:5}}> 
                  <Image
                  style={{ width: 90, height: 90}}
                  source={{uri:`${image_path}`}}
                />

                </View>

    ))}

  </ScrollView>
    */}

  <View style={{marginVertical:hp('1')}}>
  <Text style={{fontWeight:"700", marginTop:5, fontSize:hp('2.4')}}>Pickup Address -</Text>
  <View
      style={{width:"100%", 
      minHeight:hp('8'), 
      backgroundColor: "#e7eae5",
      flexDirection:"row",
      borderWidth:2,
      borderRadius:10,
      borderColor:"lightgray",
      marginTop:10,
      padding:10,
      marginHorizontal:0
      }} 
          >

            <View style={{flex:5}}>
     
             <Text style={{fontWeight:"400", marginBottom:3, fontSize:hp('2.3')}}>{pickupaddress.addressName}</Text>
            <View>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{pickupaddress.houseOrFlatNo}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{pickupaddress.landmark}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{pickupaddress.city}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{pickupaddress.village} - {pickupaddress.postalCode}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Phone number: {pickupaddress.phoneNumber}</Text>
            </View>

            </View>


          </View>
  </View>

    </ScrollView>
    <View style={{alignItems:"center", backgroundColor:"white",  width:'100%', justifyContent:"center", height:"10%"}}>
       <Pressable onPress={(e) => createSellRequestFunc()} style={{justifyContent:"center", alignItems:"center", width:"90%", height:"80%", backgroundColor:"seagreen", borderRadius:10, zIndex:1}}>
         {false ? <ActivityIndicator /> : (
         <Text style={{color:"white", fontSize:hp('2.5'), fontWeight:"600"}}>Confirm</Text>
         )}
         
        </Pressable>
    </View>
    </View>
  )
}

export default CheckoutScreen