import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Logout = () => (
  <View style={styles.container}>
    <Text>Logout page</Text>
    <Button title="Logout" onPress={() => console.log("Logout")} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Logout;
