import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import React, {useContext} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';



const SellScrapImageSelector = (props) => {
    




    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your photos!");
          return;
        }
        const result = await ImagePicker.launchImageLibraryAsync(
          {allowsMultipleSelection:true}
        );
    
        const imagePathArray = []
        const result_uri = result.assets.map((image_path) => {
          imagePathArray.push(image_path.uri)
        })
        // Explore the result
        console.log(result);
        if (!result.canceled) {
          props.dispatch({type:'AddSelectedImages', payload:imagePathArray})
    
        }
      }
    
        // This function is triggered when the "Open camera" button pressed
        const openCamera = async () => {
          // Ask the user for the permission to access the camera
          const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      
          if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
          }
      
          const result = await ImagePicker.launchCameraAsync();
    
          const result_uri = result.assets[0].uri
      
          // Explore the result
          console.log("result:",result);
      
          if (!result.canceled) {
             props.dispatch({type:'AddSelectedImages', payload:imagePathArray})
            
          }
        }

  return (
      <>
    <View style={{
        width:"100%", 
        marginVertical:7,
        height:hp('20'), 
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"white", 
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor:'black',}}>
          <Pressable onPress={() => showImagePicker()} style={{width:hp('15'), height:hp('15'), backgroundColor:"lightgray", borderRadius:180, justifyContent:"center", alignItems:"center"}}>
          <Icon name={'image-outline'} size={hp('7')}/>
          </Pressable>
          <Pressable onPress={() => openCamera()} style={{width:hp('15'), height:hp('15'), backgroundColor:"lightgray", borderRadius:180, justifyContent:"center", alignItems:"center"}}>
          <Icon name={'camera-outline'} size={hp('7')}/>
          </Pressable>
      </View>
              <ScrollView horizontal={true}>

                {props.state.map((image_path) => (
                  <View style={{ borderWidth:0.5, backgroundColor:"lightgray", marginRight:5}}> 
                    <Image
                    style={{ width: 90, height: 90}}
                    source={{uri:`${image_path}`}}
                  />
                  <Pressable onPress={() => props.dispatch({type:'RemoveSelectedImages', payload:image_path})} style={{position:"absolute", right:0, height:hp('4'), width:hp('4'), backgroundColor:"lightgray", borderRadius:90}}><Icon name={'close-outline'} size={hp('4')}/></Pressable>
                  </View>
            
                ))}
            
            
 
                </ScrollView>
              </>
  )
}

export default React.memo(SellScrapImageSelector)