import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

const bgImage = require("../assets/cloud.jpeg");
export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
    };
  }

  getCameraPermissions = async (domState) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    //const { status } = Permissions.askAsync(Permissions.CAMERA);
    //const { status } = await Permissions.askAsync(Permissions);
    //const { status } = await Permissions.askAsync(CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false,
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scannedData: data,
      domState: "normal",
      scanned: true,
    });
  };

  render() {
    const { domState, hasCameraPermissions, scannedData, scanned } = this.state;
    if (domState === "scanner") {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 1300, height: 496}}
          source={require("../assets/cloud.jpeg")}
        />

        <Text style={styles.text}>
          {hasCameraPermissions ? scannedData : "Request for Camera Permission"}
        </Text>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.getCameraPermissions("scanner")}
        >
          <Text style={styles.buttonText}>Scan Flight Ticket QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  text: {
    color: "orange",
    fontSize: 18,
    fontStyle:"italic",
  },
  button: {
    width: "43%",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 15,
    borderWidth: 6,
  },
  buttonText: {
    fontSize: 18,
    fontStyle:"italic",
    color: "blue",
  },
});
