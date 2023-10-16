import * as React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import LoginScreen from "./pages/login";
import SignupScreen from "./pages/signup";
import WelcomeScreen from "./pages/welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Stack.Navigator initialRouteName="Login" style={styles.container}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" /> */}
        <LoginScreen />
        {/* <SignupScreen /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
