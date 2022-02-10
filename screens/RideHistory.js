import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Image
          style={{ width: 1300, height: 520}}
          source={require("../assets/ap2.jpg")}
        />
        <Text style={styles.text}>Ride History Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "#D0E6F0"
  },
  text: {
    color: "purple",
    fontSize: 19,
    fontStyle:"italic"
  }
});
