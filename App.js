import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Button, Platform } from 'react-native';

export default function App() {
  console.log("App Executed")

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click Me" 
      onPress={() => Alert.alert("My title", "My message", [{text: "Yes", onPress: () => console.log("button pressed - Yes")}, {text: "No", onPress: () => console.log("button pressed - No")}] )}/>
      <Text numberOfLines={1} onPress={handlePress}>
        React Native Tutorial
      </Text>
      <TouchableOpacity onPress={ () => console.log("Image tapped")}>
      <View style={{
        width: 200,
        height: 70,
        backgroundColor: "dodgerblue"
      }}>

      </View>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});

// const containerStyle = { backgroundColor: "purple"}

// for prompt: Alert.prompt("my title", "my message", text => console.log(text))} />