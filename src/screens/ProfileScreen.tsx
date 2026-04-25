import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import AnimatedScreen from "../animations/AnimatedScreen";

export default function ProfileScreen() {
  function openLink(url: string) {
    Linking.openURL(url);
  }

  return (
    <AnimatedScreen>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://github.com/tenmenezes.png",
            }}
            style={styles.avatar}
          />

          <Text style={styles.name}>Yago Menezes</Text>
          <Text style={styles.role}>Desenvolvedor Full Stack</Text>
        </View>

        {/* SOBRE */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sobre o App</Text>
          <Text style={styles.description}>
            O GeoFinder é um aplicativo de localização que permite buscar lugares,
            visualizar no mapa e navegar até eles de forma simples e rápida.
          </Text>
        </View>

        {/* STACK */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tecnologias</Text>

          <View style={styles.tagContainer}>
            <Text style={styles.tag}>React Native</Text>
            <Text style={styles.tag}>Expo</Text>
            <Text style={styles.tag}>TypeScript</Text>
            <Text style={styles.tag}>Maps API</Text>
          </View>
        </View>

        {/* LINKS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contato</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => openLink("https://github.com/tenmenezes")}
          >
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => openLink("mailto:yago.ten.menezes@outlook.com")}
          >
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>GeoFinder v1.0.0</Text>
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#22c55e",
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  role: {
    color: "#888",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#111",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  description: {
    color: "#aaa",
    lineHeight: 20,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  tag: {
    backgroundColor: "#1f1f1f",
    color: "#22c55e",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
  },

  button: {
    backgroundColor: "#1a1a1a",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  footer: {
    textAlign: "center",
    color: "#555",
    marginTop: 10,
    fontSize: 12,
  },
});