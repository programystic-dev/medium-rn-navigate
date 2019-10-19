import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { login } from "../redux";

const Login = ({ login }) => {
  const onLogin = () => {
    console.log("Login");
    login();
  };
  return (
    <View style={styles.container}>
      <Text>Login page</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: login
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Login);
