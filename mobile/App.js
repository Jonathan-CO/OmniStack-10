import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>FalaDev</Text>
      <Text style ={styles.subtitle}>Vamos começar então....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  },

  subtitle:{
    color: '#b2d8a5',
    fontSize: 30,
    paddingTop: 15,
    textAlign: "center"
  }
});
