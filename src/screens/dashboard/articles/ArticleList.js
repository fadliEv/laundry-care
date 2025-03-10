import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./ArticleList.style";
import { articles } from "../../../utils/dummies/articles";

const ArticleList = () => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Article</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.articleListContainer}
        renderItem={({ item }) => (
          <View style={styles.articleCard}>
            <Image source={{ uri: item.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDescription}>{item.description.substring(0, 80)}...</Text>
              <Text style={styles.articleDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ArticleList;
