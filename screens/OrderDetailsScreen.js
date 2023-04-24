import { View, Text, Pressable, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import CreateAndListUserReview from '../components/CreateAndListUserReview';
import { cancelSellRequest } from '../redux/actions/sellRequestsActions';
import { useDispatch, useSelector } from 'react-redux'


const OrderDetailsScreen = ({navigation, route}) => {
  const dispatch = useDispatch()
  const { orderDetails } = route.params;
  console.log("ppoo", orderDetails)


  const cancelSellRequestFunc = () => {
    dispatch(cancelSellRequest(orderDetails.id))
    navigation.goBack()
    ToastAndroid.show('Order cancelled successfully!', ToastAndroid.SHORT);
  }





  return (
    <ScrollView style={{flex:1, backgroundColor:"white", paddingHorizontal:5}}>

      <View style={{ flexWrap:"wrap", marginVertical:10, flexDirection:"row"}}>
        {orderDetails.data.map((item) => (
          <View style={{width:wp('46.5'), borderWidth:0.5, borderColor:"gray", height:hp(11), backgroundColor: "white", flexDirection:"row", margin:3}}>
          <View style={{width:"30%", height:"100%", justifyContent:"center", alignItems:"center", }}>
            <View style={{backgroundColor:"lightgray", height:hp('5'), width:hp('5'), borderRadius:180, justifyContent:"center", alignItems:"center"}}>
              <Icon name={'checkmark-outline'} size={hp('4')}/>
            </View>
          </View>
          <View style={{width:"70%", justifyContent:"center", }}>
            <Text style={{fontWeight:"bold", marginBottom:hp('0.5')}}>{item.itemName}</Text>
            <Text style={{fontSize:hp('2')}}>₹ {item.rate} / {item.unit}</Text>
          </View>
        </View>

        ))}
        
    
      
 
  </View>
{/*
  <ScrollView horizontal={true}>

{orderDetails.images?.map((image_path, index) => (
  <View key={index} style={{ borderWidth:0.5, backgroundColor:"lightgray", marginRight:5}}> 
    <Image
    style={{ width: 90, height: 90}}
    source={{uri:`${image_path}`}}
  />
  
  </View>

))}



</ScrollView>
*/}




  <View style={{ minHeight:hp('6'), marginVertical:10, backgroundColor:"#e7eae5", marginHorizontal:8}}>
    <View style={{ borderWidth:0.5, justifyContent:"center", borderColor:"lightgray", minHeight:hp('5')}}>
    <Text style={{fontWeight:"700", marginBottom:3, marginLeft:6, fontSize:hp('2.5')}}>Pickup Address</Text>
    </View>
    <View
         style={{width:"100%", 
          minHeight:hp('8'), 
          //backgroundColor: "#e7eae5", 
          flexDirection:"row",
          borderWidth:0.5,
          borderColor:"lightgray",
          padding:10,
          }} 
          >
 
     

            <View style={{flex:5}}>
     
             <Text style={{fontWeight:"400", marginBottom:3, fontSize:hp('2.3')}}>{orderDetails.pickupAddress.addressName}</Text>
            <View>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{orderDetails.pickupAddress.houseOrFlatNo}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{orderDetails.pickupAddress.landmark}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{orderDetails.pickupAddress.city}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>{orderDetails.pickupAddress.village} - {orderDetails.pickupAddress.postalCode}</Text>
            <Text style={{fontSize:hp('2'), color:"gray"}}>Phone number: {orderDetails.pickupAddress.phoneNumber}</Text>
            </View>
     
            
            </View>


          </View>
  </View>

  <View style={{ minHeight:hp('6'), marginVertical:10, backgroundColor:"#e7eae5", marginHorizontal:8}}>
    <View style={{ borderWidth:0.5, justifyContent:"center", borderColor:"lightgray", minHeight:hp('5')}}>
    <Text style={{fontWeight:"700", marginBottom:3, marginLeft:6, fontSize:hp('2.5')}}>More Details</Text>
    </View>
    <View
         style={{width:"100%", 
          minHeight:hp('8'), 
          //backgroundColor: "#e7eae5", 
          flexDirection:"row",
          borderWidth:0.5,
          borderColor:"lightgray",
          padding:10,
          }} 
          >
 
     

     <View style={{flex:5}}>
    <Text>Listed on: {orderDetails.requestedDate}</Text>
    <Text>Order Status: {orderDetails.requestStatus}</Text>
    {orderDetails.order!==null && orderDetails.order.requestStatus==="Completed" && (
      <>
      <Text>Buyer: {orderDetails.order.acceptedUser.businessName}</Text>
      <Text>Sold on - {orderDetails.order.completedDate}</Text>
      </>
    )}
    

    </View>


          </View>
  </View>
  {orderDetails.order !== null && orderDetails.order.requestStatus==="Completed" && (
  <View style={{ minHeight:hp('6'), marginVertical:10, backgroundColor:"#e7eae5", marginHorizontal:8}}>
    <View style={{ borderWidth:0.5, justifyContent:"center", borderColor:"lightgray", minHeight:hp('5')}}>
    <Text style={{fontWeight:"700", marginBottom:3, marginLeft:6, fontSize:hp('2.5')}}>Price Details</Text>
    </View>
    <View
         style={{width:"100%", 
          minHeight:hp('8'), 
          //backgroundColor: "#e7eae5", 
          flexDirection:"row",
          borderWidth:0.5,
          borderColor:"lightgray",
          padding:10,
          }} 
          >
 
     

            <View style={{flex:5}}>
     
            <Text>Listed on - 18/12/2023</Text>
    <Text>Order Status - Completed</Text>
    <Text>Sold to - M&M Scrapagers</Text>
    <Text>Sold on - 18/12/2023</Text>
     
            
            </View>


          </View>
  </View>
  )}

{orderDetails.order !== null && orderDetails.order.requestStatus==="Completed" && (
  
  <View style={{ minHeight:hp('6'), marginVertical:10, backgroundColor:"#e7eae5", marginHorizontal:8}}>
  <View style={{ borderWidth:0.5, flexDirection:"row", paddingHorizontal:5, justifyContent:"space-between", alignItems:"center", borderColor:"lightgray", minHeight:hp('5')}}>
  <Text style={{fontWeight:"700", marginBottom:3, fontSize:hp('2.5')}}>Your Review</Text>
  
  
  </View>
  
  <CreateAndListUserReview orderId={orderDetails.order.id} orderReview={orderDetails.order.review}/>
 
  
</View>

)}
{(orderDetails.requestStatus==="Requested" || orderDetails.requestStatus==="Accepted") && (
    <View style={{ minHeight:hp('6'), marginVertical:10, backgroundColor:"#e7eae5", marginHorizontal:8}}>
    <TouchableOpacity onPress={() => cancelSellRequestFunc()} style={{justifyContent:"center", alignItems:"center", borderColor:"red", borderWidth:1, width:"100%", height:hp("7"), backgroundColor:"white", borderRadius:10, zIndex:1}}>
                   <Text style={{color:"red", fontSize:hp('2.5'), fontWeight:"600"}}>Cancel order</Text>
      </TouchableOpacity>
      </View>

)}


  
    </ScrollView>
  )
}

export default OrderDetailsScreen