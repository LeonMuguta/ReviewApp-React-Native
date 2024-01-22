import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/home';
import Navigator from './routes/drawer';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  } else {
    return (
      <Navigator />
    );
  }
}
