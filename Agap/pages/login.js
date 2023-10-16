import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [loggedIn, onLogin] = useState(false);

  return (
    <>
      <Image
        style={styles.image}
        source={require("../img/RedTransparentLogo.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Logo"}
      />
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView keyboardDismissMode="on-drag">
          <>
            <Text style={styles.headerText}>Login to Continue</Text>
            <Text style={styles.regularText}>Email</Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Email"}
              keyboardType={"email-address"}
            />
          </>
          <Pressable
            onPress={() => navigation.navigate("Welcome")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
          <Text style={styles.registerText}>
            Don't have an account? Register.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#ECEAEA",
    borderRadius: 5,
  },
  image: {
    width: 180,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  regularText: {
    color: "black",
    margin: 5,
    marginVertical: 0,
    fontSize: 18,
    paddingBottom: 2,
    paddingLeft: 10,
  },
  headerText: {
    padding: 50,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  button: {
    fontSize: 22,
    width: 230,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
    margin: 50,
    backgroundColor: "#FF1F1E",
    borderColor: "#FF1F1E",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
  registerText: {
    color: "black",
    fontSize: 16,
    margin: 5,
    textAlign: "center",
  },
});
