import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import filters from "../../../services/filters";

interface Filter {
  id: number;
  label: string;
}

interface ChipBarProps {
  onFilterChange: (label: string) => void;
}

const ChipBar: React.FC<ChipBarProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const handleFilterSelect = (filter: Filter) => {
    setSelectedFilter(filter.id);
    onFilterChange(filter.label);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.chipBar}
    >
      {filters.map((filter: Filter) => (
        <TouchableOpacity
          key={filter.id}
          style={[
            styles.chip,
            selectedFilter === filter.id && styles.chipSelected,
          ]}
          onPress={() => handleFilterSelect(filter)}
        >
          <Text
            style={[
              styles.chipText,
              selectedFilter === filter.id && styles.chipTextSelected,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chipBar: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  chip: {
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    margin: 5,

    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  chipSelected: {
    backgroundColor: "#8A0000",
  },
  chipText: {
    color: "#000",
    fontFamily: "Jost_400Regular",
    fontWeight: 500,
  },
  chipTextSelected: {
    color: "#FFF",
  },
});

export default ChipBar;
