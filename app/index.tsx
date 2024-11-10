import { router } from "expo-router";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Jost_400Regular } from "@expo-google-fonts/jost";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/small-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Добро пожаловать в Reserve it!</Text>
      <Text style={styles.descriptionText}>
        Ваше простое решение для бронирования столиков в лучших ресторанах!
        Найдите идеальное место, выберите время, и ваш стол будет готов, когда
        вы приедете. Быстро, удобно и без лишних звонков.
      </Text>

      <TouchableOpacity
        style={styles.login_btn}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.login_btn_text}>Войти</Text>
      </TouchableOpacity>

      <View style={styles.separatorWithText}>
        <View style={styles.line}></View>
        <Text style={styles.separatorText}>или</Text>
        <View style={styles.line}></View>
      </View>

      <TouchableOpacity
        style={styles.register_btn}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.register_btn_text}>Зарегистрироваться</Text>
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
  logo: {
    width: 101,
    height: 101,
    marginBottom: 25,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 600,
    fontFamily: "Jost_400Regular",
    textTransform: "uppercase",
  },

  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 100,
    marginBottom: 25,
    fontFamily: "Jost_400Regular",
  },

  login_btn: {
    backgroundColor: "#8A0000",
    paddingVertical: 5,
    width: "100%",
    borderRadius: 32,
  },

  login_btn_text: {
    textAlign: "center",
    color: "#FDF0D5",
    fontFamily: "Jost_400Regular",
    fontSize: 20,
    fontWeight: 500,
  },

  register_btn: {
    backgroundColor: "#FDF0D5",
    paddingVertical: 5,
    width: "100%",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "8A0000",
  },

  register_btn_text: {
    textAlign: "center",
    color: "#8A0000",
    fontFamily: "Jost_400Regular",
    fontSize: 20,
    fontWeight: 500,
  },

  separatorWithText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  line: {
    flex: 1,
    height: 1,
    width: 80,
    backgroundColor: "#000",
  },

  separatorText: {
    marginHorizontal: 7,
    fontSize: 16,
    color: "#000",
  },
});
