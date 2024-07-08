import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function ModalPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>
        <Pressable style={styles.innerPassword}>
            <Text style={styles.text}>123456</Text>
        </Pressable>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    backgroundColor: "#F3F3FF",
    alignItems: "center",
    width: "80%",
    borderRadius: 7,
    padding: 5,
  },
  title: { fontSize: 24, fontWeight: "600", paddingVertical: 15 },
  innerPassword: {
    backgroundColor: "#0E0E0E",
    width: "80%",
    borderRadius: 7,
    paddingVertical: 7,
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 18,
  },
  containerButton: {
    flexDirection: "row",
    alignContent: "space-between",
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 14,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    borderRadius: 8,
  },
  buttonSaveText: {
    color: "#FFF",
    fontWeight: 'bold'
  }
});
