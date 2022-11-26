/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Cart from './Cart';

// import AntDesign from 'react-native-vector-icons/AntDesign';


function App(){

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <Cart />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
});

export default App;
