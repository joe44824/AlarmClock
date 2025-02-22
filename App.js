import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import AlarmListScreen from "./src/screens/AlarmListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AlarmListScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
