import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Login = () => (
  <View style={styles.container}>
    <Text>Login page</Text>
    <Button title="Login" onPress={() => console.log("Login")} />
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

export default Login;
