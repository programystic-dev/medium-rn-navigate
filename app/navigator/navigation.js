import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Login, Logout } from "../screens";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Logout: {
    screen: Logout,
    navigationOptions: () => ({
      headerLeft: null
    })
  }
});

export default createAppContainer(AppNavigator);
