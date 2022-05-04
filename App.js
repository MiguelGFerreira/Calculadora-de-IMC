import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./components/Main/index";
import Title from './components/Title/index'
 
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop:80
  },
});