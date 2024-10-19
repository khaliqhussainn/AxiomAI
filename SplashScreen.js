import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "./assets/main.jpg";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Icon} style={styles.image}></Image>
        <Text style={{ fontSize: 50 , fontWeight:'bold' , color: "white" , position: 'absolute' , top: 100 , textAlign:'center' , color:'white', left: 0 , right: 0 }}>Axiom AI</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: "100%",
    resizeMode: "cover",
  },
});
