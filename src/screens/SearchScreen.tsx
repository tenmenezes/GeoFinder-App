import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { searchPlaces } from "../services/geocoding";
import { useNavigation } from "@react-navigation/native";
import AnimatedScreen from "../animations/AnimatedScreen";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const navigation = useNavigation<any>();

  async function handleSearch(text: string) {
    setQuery(text);

    if (text.length > 2) {
      const places = await searchPlaces(text);
      setResults(places);
    } else {
      setResults([]);
    }
  }

  return (
    <AnimatedScreen>
      <View style={styles.container}>
        {/* INPUT */}
        <TextInput
          placeholder="Buscar lugares..."
          placeholderTextColor="#666"
          value={query}
          onChangeText={handleSearch}
          style={styles.input}
        />

        {/* LISTA */}
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("Home", {
                  latitude: item.latitude,
                  longitude: item.longitude,
                  name: item.name,
                })
              }
            >
              {/* Ícone fake */}
              <View style={styles.icon}>
                <Text style={styles.iconText}>📍</Text>
              </View>

              {/* Conteúdo */}
              <View style={styles.content}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.name}
                </Text>

                <Text numberOfLines={2} style={styles.address}>
                  {item.address}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 14,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 16,
    fontSize: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,

    // sombra Android
    elevation: 3,

    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  icon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  iconText: {
    fontSize: 18,
  },

  content: {
    flex: 1,
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  address: {
    color: "#888",
    fontSize: 13,
  },
});