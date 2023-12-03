import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScren from "./screens/HomeScren";
import CreateScreen from "./screens/CreateScreen";
import { BlogProvider } from "./context/BlogContext";

type RootStackParamsList = {
  Home: undefined;
  Create: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blog App" }}>
          <Stack.Screen name="Home" component={HomeScren} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
