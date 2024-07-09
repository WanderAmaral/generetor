import { Pressable, StyleSheet, Text } from "react-native";

interface PasswordItemProps {
  data: string;
  removePassword: () => void;
}

export const PasswordItem = ({ data, removePassword }: PasswordItemProps) => {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8
  },
  text: {
    fontSize: 14,
    color: "#FFF",
  },
});
