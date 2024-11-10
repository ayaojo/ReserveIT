import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/small-logo.png")} />

      <View style={styles.emailInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Email или логин"
          placeholderTextColor="#808080"
        />
        <Ionicons name="person" size={20} color="#202020" />
      </View>

      <TouchableOpacity
        style={styles.sent_btn}
        onPress={() => router.push("/")}
      >
        <Text style={styles.sent_btn_text}>Отправить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FDF0D5",
  },

  sent_btn: {
    backgroundColor: "#8A0000",
    paddingVertical: 5,
    width: "100%",
    borderRadius: 32,
    marginTop: 200,
    marginBottom: 10,
  },

  sent_btn_text: {
    color: "#FDF0D5",
    fontFamily: "Jost_400Regular",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },

  emailInput: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 54,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 80,
    marginBottom: 10,
  },

  placeholder: {
    height: 40,
    fontFamily: "Jost_400Regular",
    fontSize: 16,
    paddingLeft: 10,
  },
});
