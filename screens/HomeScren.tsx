import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useBlog } from "../context/BlogContext";
import { Entypo } from "@expo/vector-icons";

export default function HomeScren() {
  const { blogPosts, addBlogPost, deleteBlogPost } = useBlog();
  return (
    <View>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Entypo name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});
