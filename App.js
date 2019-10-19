import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/redux";
import { AppNavigator, NavigationService } from "./app/navigator";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
}
