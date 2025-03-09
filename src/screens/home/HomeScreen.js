import React from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";

import styles from "./HomeScreen.style";
import { events } from "../../utils/dummies/events";
import { articles } from "../../utils/dummies/articles";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.appName}>LaundryCare</Text>
        <Text>🔔</Text>
      </View>

      <Text style={styles.introText}>
        Bebaskan pakaian kotor Anda dengan layanan laundry terbaik! 
      </Text>
      <Button title="Order Sekarang" onPress={() => {}} />

      <ScrollView horizontal style={styles.carousel}>
        {events.map(event => (
        //   <Image key={event.id} source={event.image} style={styles.eventImage} />
        <View>Ini Gambar Event</View>
        ))}
      </ScrollView>

      {articles.map(article => (
        <View key={article.id} style={styles.articleCard}>
          {/* <Image source={article.image} style={styles.articleImage} /> */}
          <View>Ini gambar article</View>
          <View>
            <Text>{article.title}</Text>
            <Text numberOfLines={2}>{article.description}...</Text>
            <Text>{article.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
