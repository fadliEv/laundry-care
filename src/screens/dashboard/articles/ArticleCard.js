import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style/ArticleCard.style";


const ArticleCard = ({ article }) => {
  return (
    <View style={styles.articleCard}>
      <Image source={{ uri: article.image }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleDescription}>
          {article.description.substring(0, 80)}...
        </Text>
        <Text style={styles.articleDate}>{article.date}</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
