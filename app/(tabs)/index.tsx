import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function TabsScreen() {
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.text}>Livros</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})

