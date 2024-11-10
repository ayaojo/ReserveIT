// app/welcome.tsx
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
import Ionicons from "react-native-vector-icons/Ionicons"; // Вы можете использовать разные иконки из этой библиотеки

export default function Login() {
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

      <View style={styles.passwInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Пароль"
          placeholderTextColor="#808080" 
          secureTextEntry={true}
        />
        <Ionicons name="eye" size={20} color="202020" />
      </View>

      <Text
        style={{
          fontFamily: "Jost_400Regular",
          textDecorationLine: "underline",
        }}
        onPress={() => router.push("/forgotPassword")}
      >
        Забыли пароль?
      </Text>

      <TouchableOpacity
        style={styles.login_btn}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.login_btn_text}>Войти</Text>
      </TouchableOpacity>

      <Text
        style={styles.link_to_register}
        onPress={() => router.push("/register")}
      >
        Нет аккаунта? <Text style={{ fontWeight: 700 }}>Создайте сейчас!</Text>
      </Text>
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

  login_btn: {
    backgroundColor: "#8A0000",
    paddingVertical: 5,
    width: "100%",
    borderRadius: 32,
    marginTop: 200,
    marginBottom: 10,
  },

  login_btn_text: {
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

  passwInput: {
    backgroundColor: "#fff",
    borderRadius: 54,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  placeholder: {
    height: 40,
    fontFamily: "Jost_400Regular",
    fontSize: 16,
    paddingLeft: 10,
  },

  link_to_register: {
    color: "#8A0000",
  },
});
