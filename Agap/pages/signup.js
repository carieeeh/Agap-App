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

export default function SignupScreen({ navigation }) {
  const [firstname, onChangeFirstname] = useState("");
  const [lastname, onChangeLastname] = useState("");
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [contactnum, onChangeContactnum] = useState("");

  return (
    <>
      <Image
        style={styles.image}
        source={require("../img/RedTransparentLogo.png")}
        accessible={true}
        accessibilityLabel={"Logo"}
      />
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView keyboardDismissMode="on-drag">
          <>
            <Text style={styles.headerText}>Sign Up</Text>
            <Text style={styles.regularText}>First Name</Text>
            <TextInput
              style={styles.inputBox}
              value={firstname}
              onChangeText={onChangeFirstname}
              placeholder={"First Name"}
            />
            <Text style={styles.regularText}>Last Name</Text>
            <TextInput
              style={styles.inputBox}
              value={lastname}
              onChangeText={onChangeLastname}
              placeholder={"Last Name"}
            />
            <Text style={styles.regularText}>Username</Text>
            <TextInput
              style={styles.inputBox}
              value={username}
              onChangeText={onChangeUsername}
              placeholder={"Username"}
            />
            <Text style={styles.regularText}>Email</Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Email"}
              keyboardType={"email-address"}
            />
            <Text style={styles.regularText}>Contact Number</Text>
            <TextInput
              style={styles.inputBox}
              value={contactnum}
              onChangeText={onChangeContactnum}
              placeholder={"Contact Number"}
              keyboardType={"phone-pad"}
            />
          </>
          <Text style={styles.termsText}>
            I agree to the terms and conditions.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Welcome")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "#ECEAEA",
    borderRadius: 5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  image: {
    width: 150,
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "center",
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
    padding: 30,
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
    width: 230,
    padding: 10,
    marginTop: 30,
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
  termsText: {
    color: "black",
    fontSize: 16,
    marginTop: 40,
    textAlign: "center",
  },
});
