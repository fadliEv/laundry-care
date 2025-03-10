import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./EventCarouse.style";

const EventCarousel = ({events}) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Special in LaundryCare</Text>
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.eventListContainer}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
          </View>
        )}
      />
    </View>
  );
};

export default EventCarousel;
