import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./style/ArticleList.style";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Article</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList        
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        nestedScrollEnabled={true}
        scrollEnabled={false} 
        renderItem={({ item }) => <ArticleCard article={item}/>}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default ArticleList;
