import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ArticleDetailScreen.style";

const ArticleDetailScreen = ({ route, navigation }) => {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Article Detail</Text>
      </View>

      <ScrollView>
        <Image source={{ uri: article.image }} style={styles.articleImage} />
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.date}>{article.date}</Text>
          <Text style={styles.description}>{article.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleDetailScreen;
