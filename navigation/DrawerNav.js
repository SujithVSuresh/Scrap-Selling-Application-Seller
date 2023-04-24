import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import {Button, View, Text, Pressable}from 'react-native'
import { HomeStackNav } from './StackNav';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';



const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  const navigation = useNavigation()

  const userLoginInfo = useSelector(state => state.userLogin)
    const {userInfo} = userLoginInfo
 

    function CustomDrawerContent(props) {
      const navigate = props.navigation.navigate
        return (
          

          <DrawerContentScrollView {...props}>
            <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", padding:15}}>
           
          <View style={{width:hp('15'), height:hp('15'), borderRadius:180, backgroundColor:"red", marginBottom:1, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:hp('9.5'), color:"white", fontWeight:"600"}}>{userInfo?.first_name?.slice(0, 1)}</Text>

          </View>

          <View style={{alignItems:"center"}}>
            <Text style={{fontWeight:"bold"}}>{userInfo.first_name}</Text>
            <Text style={{fontWeight:"400"}}>{userInfo.username}</Text>
            
          </View>
          </View>
          
          {/*<DrawerItemList {...props} />*/}

       <DrawerItem
          {...props} 
        label="Account"
        onPress={(e) => navigate('AccountScreen')}
      />

          <DrawerItem
          {...props} 
        label="Orders"
        onPress={(e) => navigate('MyOrdersScreen')}
      />

      <DrawerItem
          {...props} 
        label="Rate Card"
        onPress={(e) => navigate('RateCardScreen')}
      />
      <DrawerItem
          {...props} 
        label="Sell Scrap"
        onPress={(e) => navigate('SellScrapScreen', {"category":"Paper"})}
      />
          <DrawerItem
          {...props} 
        label="Addresses"
        onPress={(e) => navigate('PickupAddressSelectorScreen', {"pathName":"notSellPath"})}
      />
          <DrawerItem
          {...props} 
        label="Logout"
        onPress={(e) => signoutHandler()}
      />
    </DrawerContentScrollView>
        );
      }

  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
        drawerStyle: {
          backgroundColor: '#e7eae5',
          width: 240,
        },
        drawerHideStatusBarOnOpen:false,
        swipeEnabled:false
      }}
      >
      <Drawer.Screen name="HomeStackNav" component={HomeStackNav} options={{headerShown:false, drawerLabel: 'Home', headerTitle:"ScrapDeal"}}/>
    </Drawer.Navigator>
  );
}