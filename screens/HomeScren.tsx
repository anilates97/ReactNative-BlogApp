import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";
import { useBlog } from "../context/BlogContext";

export default function HomeScren() {
  const { blogPosts, addBlogPost } = useBlog();
  return (
    <View>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
