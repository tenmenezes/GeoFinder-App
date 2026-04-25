import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../hooks/useLocation";
import { useRef, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import AnimatedScreen from "../animations/AnimatedScreen";

export default function HomeScreen() {
  const { location, error } = useLocation();

  const mapRef = useRef<MapView>(null);

  const route = useRoute();
  const params = route.params as any;

  useEffect(() => {
    if (params?.latitude && params?.longitude && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: params.latitude,
          longitude: params.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000 // duração da animação (ms)
      );
    }
  }, [params]);

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.05, // começa mais zoom-out
          longitudeDelta: 0.05,
        },
        0
      );
  
      setTimeout(() => {
        mapRef.current?.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
      }, 300);
    }
  }, [location]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.center}>
        <Text>Carregando localização...</Text>
      </View>
    );
  }

  return (
    <AnimatedScreen>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
        {params?.latitude && params?.longitude && (
          <Marker
            coordinate={{
              latitude: params.latitude,
              longitude: params.longitude,
            }}
            title={params?.name}
          />
        )}
      </MapView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});