import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch, Pressable, Alert,Image} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const Login=()=> {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* code for login text */}
      <Text style={styles.title}>LOGIN</Text>
      {/* code for username box */}
      <TextInput
        style={styles.input}
        placeholder="EMAIL OR USERNAME"
        value={username}
        onChangeText={setUsername}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {/* code for password box */}
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <View style={styles.rememberView}>
        <Switch
          style={styles.switch}
          value={click}
          onValueChange={setClick}
          trackColor={{ true: "green", false: "gray" }}
        />
        <Text style={styles.rememberText}>Remember Me</Text>
        <Pressable onPress={() => Alert.alert("Forget Password!")}>
          <Text style={styles.forgetText}>Forgot Password?</Text>
        </Pressable>
      </View>
      <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>
 <View style={styles.mediaIcons}>
               <AntDesign name="linkedin-square" size={50} style={{paddingHorizontal:10}} color="black" />
                <AntDesign name="github" size={50} style={{paddingHorizontal:10}}  color="black" />

        </View>
 <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 40,
    color: "grey",
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  switch: {
    marginRight: 10,
  },
  rememberView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: "red",
  },
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
   buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  button : {
    backgroundColor : "red",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
    mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
 
  signup : {
    color : "red",
    fontSize : 13
  }
});
export default Login;