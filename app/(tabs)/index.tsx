import Slider from "@react-native-community/slider";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import ModalPassword from "../src/components/modal";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

export default function App() {
  const [size, setSize] = useState<number>(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalView, setModalView] = useState(false);

  const handleClickGenerator = () => {
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalView(true);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/app/src/assets/logo.png")}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(Number(value.toFixed(0)))}
        ></Slider>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClickGenerator}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      <Modal animationType="fade" visible={modalView} transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalView(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
