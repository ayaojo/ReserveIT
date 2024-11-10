import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface CafeCardInfoProps {
  image: any;
  name: string;
  cuisine: string;
  rating: number;
  onFavoritePress: () => void;
  onCafePress: () => void;
}

const CafeCardInfo: React.FC<CafeCardInfoProps> = ({
  image,
  name,
  cuisine,
  rating,
  onFavoritePress,
  onCafePress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCafePress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.cuisine}>{cuisine}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}/10</Text>
        <Ionicons
          style={styles.favbtn}
          name="heart-outline"
          size={15}
          color="#fff"
          onPress={onFavoritePress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "55%",
    padding: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 128,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Jost_400Regular",
    marginTop: 8,
    marginBottom: 4,
  },
  cuisine: {
    fontSize: 12,
    color: "#A2A2A2",
    fontFamily: "Jost_400Regular",
  },
  ratingContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    fontSize: 18,
    fontWeight: "600",
  },
  favbtn: {
    backgroundColor: "#8A0000",
    borderRadius: 8,
    padding: 8,
  },
});

export default CafeCardInfo;
