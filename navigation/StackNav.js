import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SellScrapScreen from '../screens/SellScrapScreen';
import PickupAddressSelectorScreen from '../screens/PickupAddressSelectorScreen';
import AddNewAddressScreen from '../screens/AddNewAddressScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import RateCardScreen from '../screens/RateCardScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import AccountScreen from '../screens/AccountScreen';
import AccountInformationScreen from '../screens/AccountInformationScreen';
import ChangeNameScreen from '../screens/ChangeNameScreen';
import ChooseLocationOnMapScreen from '../screens/ChooseLocationOnMapScreen';



import { Button, Pressable, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { USER_LOGIN_SUCCESS } from '../redux/constants/userConstants';





const Stack = createStackNavigator();

export const HomeStackNav = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const userLoginInfo = useSelector(state => state.userLogin)
    const {userInfo} = userLoginInfo
    console.log("ooi", userInfo)

    useEffect(() => {
    const userInfoFromStorage = async ()  => {
      try {
      const storedData = await SecureStore.getItemAsync('userInfoSecureStore') ? await SecureStore.getItemAsync("userInfoSecureStore") : null
      const parsedData = JSON.parse(storedData)
      console.log("ioo", parsedData)

      
      if (parsedData !== null){
      dispatch({type:USER_LOGIN_SUCCESS, payload:parsedData})
     }
      } catch (error) {
     console.log(error);
     }
    }
    userInfoFromStorage()
  

    }, [])

    

    return (
    <Stack.Navigator screenOptions={
        {
            headerShadowVisible: false,
       headerStyle: {backgroundColor:"seagreen"},
       headerTintColor: 'white',
       headerTitleStyle: {
              color: 'white'
            },
    
       
        }
    }>
        {Object.keys(userInfo).length === 0 ? (
            <>
            <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false, animation:'fade'}}/>
            <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false, animation:'fade'}}/>
        
            </>
              
        ) : (
            <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, animation:'fade'}}/>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: true, animation:'fade', headerTitle:"Account"}}/>
            <Stack.Screen name="SellScrapScreen" component={SellScrapScreen} options={{headerShown: true, animation:'fade', headerTitle:"Sell Scrap"}}/>
            <Stack.Screen name="PickupAddressSelectorScreen" component={PickupAddressSelectorScreen} options={{headerShown: true, animation:'fade', headerTitle:"Pickup Address", headerRight:() => (<Pressable onPress={(e) => navigation.navigate('AddNewAddressScreen', {"address":{}, "coordinates":{}})} style={{marginRight:10}}><Icon name='add-circle-outline' color="white" size={hp('5')}/></Pressable>)}}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: true, animation:'fade', headerTitle:"Checkout"}}/>
            <Stack.Screen name="RateCardScreen" component={RateCardScreen} options={{ headerShown: true, animation:'fade', headerTitle:"Rate Card"}}/>
            <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} options={{ headerShown: true, headerTitle:"Orders", animation:'fade'}}/>
            <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} options={{headerShown: true, headerTitle:"Order Details", animation:'fade'}}/>
            <Stack.Screen name="AddNewAddressScreen" component={AddNewAddressScreen} options={{headerShown: true, headerTitle:"Add New Address", animation:'fade'}}/>
            <Stack.Screen name="ChooseLocationOnMapScreen" component={ChooseLocationOnMapScreen} options={{headerShown: true, headerTitle:"Select location", animation:'fade'}}/>
            {/*
            
            
            <Stack.Screen name="AccountInformationScreen" component={AccountInformationScreen} options={{ headerShown: true, animation:'fade', headerTitle:"Account"}}/>
        <Stack.Screen name="ChangeNameScreen" component={ChangeNameScreen} options={{ headerShown: true, animation:'fade', headerTitle:"Change Name"}}/> */}
            </>
            
     
        )}

    </Stack.Navigator> 
    )
}