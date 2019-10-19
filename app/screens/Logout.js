import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { logout } from "../redux";

const Logout = ({ logout }) => {
  const onLogout = () => {
    console.log("Logout");
    logout();
  };
  return (
    <View style={styles.container}>
      <Text>Logout page</Text>
      <Button title="Logout" onPress={onLogout} />
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

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: logout
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Logout);
