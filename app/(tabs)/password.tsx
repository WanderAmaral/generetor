import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import useStorage from "../src/hooks/useStorage";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { PasswordItem } from "../src/components/password/passworditem";

export default function Password() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    const fetch = async () => {
      const passwords = await getItem("@pass");
      setListPasswords(passwords);
    };
    fetch();
  }, [focused]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>My passwords</Text>
      </View>
      <View style={styles.passwordContainer}>
        <FlatList
          style={{ flex: 1 }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem data={item} removePassword={() => removeItem("@pass", item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#392DE9",
    height: 120,
    flexDirection: "column-reverse",
    padding: 15,
  },
  title: {
    fontSize: 24,
    color: "#FFF",
  },
  passwordContainer: {
    flex: 1,
    gap: 10,
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 14
  },
});
