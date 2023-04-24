import { View, Text, Pressable, FlatList, RefreshControl, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { getSellRequestOrders } from '../redux/actions/sellRequestsActions';




const MyOrdersScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false);

  const sellRequestOrderList = useSelector(state => state.allSellRequestOrder)
  const {orders, loading} = sellRequestOrderList
  console.log("pooooooooodaaaaaaaaaaaaa",orders)
  

  useEffect(() => {
    dispatch(getSellRequestOrders())

      

  }, [])

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSellRequestOrders())
    setRefreshing(false);

};

 


  return (
    <View style={{flex:1, backgroundColor:"white", paddingHorizontal:10}}>
      <FlatList
        data={orders}
        renderItem={({item}) => (

          <Pressable onPress={() => navigation.navigate('OrderDetailsScreen', {"orderDetails":item})} style={{ minHeight:hp('15%'), width:"auto", backgroundColor:"#e7eae5", borderRadius:15, padding:hp('1.8%')}}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View  style={{width:wp('16'), height:hp('3'),  backgroundColor:item.requestStatus==="Accepted" ? "lightblue" : item.requestStatus==="Cancelled" ? "red" : item.requestStatus==="Completed" ? "seagreen" : "gray",  margin:2,  borderRadius:5, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontWeight:"400", fontSize:hp('1.5'), color:"white"}}>{item.requestStatus}</Text>
           
       
           </View>
           <Text style={{fontWeight:"400", color:"gray", fontSize:hp('1.8')}}>{item.requestedDate}</Text>
           </View>
   
         <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:5, flex:7}}>
           {item.data.map((x, index) => (
             <View key={index} style={{minWidth:wp('20'), height:hp('5'), backgroundColor: "white", borderColor:"gray", paddingHorizontal:10, margin:3, borderWidth:0.5, justifyContent:"center", alignItems:"center"}}>
             <Text style={{fontWeight:"700",}}>{x.itemName}</Text>
             </View>

           ))}
            

         </View>
           
         
           
      
         </Pressable>

        )}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

    </View>
  )
}

export default MyOrdersScreen