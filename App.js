import React from 'react';
import FetchData from './components/FetchData'
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {
  
  return (
    <View style={styles.container}>
        
        <FetchData />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
