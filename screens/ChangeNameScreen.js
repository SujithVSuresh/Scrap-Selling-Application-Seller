import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const ChangeNameScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:"white", paddingHorizontal:10}}>
     <View style={{marginTop:hp('5')}}>
      <Text style={{color:"gray", fontWeight:"500"}}>Current</Text>
      <TextInput style={{borderBottomWidth:1, borderColor:"gray"}} editable={false} defaultValue='Sujith V S'></TextInput>
     </View>

     <View style={{marginTop:hp('5')}}>
      <Text style={{fontWeight:"500"}}>New</Text>
      <TextInput style={{borderBottomWidth:1}}></TextInput>
     </View>

     <View style={{backgroundColor:"seagreen", width:60, height:30, borderRadius:20, alignSelf:"flex-end", justifyContent:"center", alignItems:"center", marginTop:20}}>
        <Text style={{color:"white"}}>Done</Text>
     </View>
    </View>
  )
}

export default ChangeNameScreen