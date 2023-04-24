import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerNav } from './navigation/DrawerNav';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { store } from './redux/store';
import { Provider } from 'react-redux';



const slides = [
  {
    key: 1,
    title: 'Select scrap items for selling',
    text: 'We collect scrap from wide list of items like Newspaper, Iron, Electronic machine, Beer Bottle etc. WE don not pick up cloth, wood, glass',
    image: require('./assets/icon.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/icon.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/icon.png'),
    backgroundColor: '#22bcb5',
  }
];

export default function App() {

  return (
    <>
     <StatusBar/>
    <NavigationContainer>
      <SafeAreaProvider>
    <SafeAreaView style={styles.container}>


     <Provider store={store}><DrawerNav /></Provider>
  
 
 
      
    </SafeAreaView>
    
    </SafeAreaProvider>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  introImageStyle: {
    width:200,
    height: 300,
  },
  introTitleStyle:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
