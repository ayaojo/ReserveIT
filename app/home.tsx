import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import CafeCardInfo from "@/app/components/common/CafeCardInfo";
import ChipBar from "./components/common/ChipBar";
import { cafeData } from "../services/cafes";

interface Cafe {
  id: number;
  image: any;
  name: string;
  cuisine: string;
  category: string;
  rating: number;
}

export default function Home() {
  const router = useRouter();
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFavoritePress = (id: number) => {
    setFavoriteRestaurants((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favoriteId) => favoriteId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const handleFilterChange = (label: string) => {
    setSelectedFilter(label); // Сохраняем выбранный фильтр
  };

  const filteredData = selectedFilter
    ? cafeData.filter((cafe) => cafe.cuisine === selectedFilter)
    : cafeData;

  const renderItem = ({ item }: { item: Cafe }) => (
    <CafeCardInfo
      image={item.image}
      name={item.name}
      cuisine={item.cuisine}
      rating={item.rating}
      onFavoritePress={() => handleFavoritePress(item.id)}
      onCafePress={() => router.push({ pathname: "/components/common/CafeID" })}
      category={item.category}
    />
  );

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/ad.png")} style={styles.adph} />
      <ChipBar onFilterChange={handleFilterChange} />

      <FlatList
        data={filteredData} // Используем отфильтрованные данные
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#F9F9F9",
  },
  grid: {},
  adph: {
    width: "100%",
    borderRadius: 12,
    resizeMode: "contain",
  },
});
