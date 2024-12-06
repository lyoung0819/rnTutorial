import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Button, Platform } from 'react-native';

export default function App() {
  console.log("App Executed")
  // use useDimensions & useDeviceOrientation from @react-native-community/hooks if you want to implement changes when phone turns
  // console.log(useDimensions)
  console.log(Dimensions.get("screen"));

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
    
     <View style={{padding: 10, flex: 1}}>
     </View>
     <View style={{flex: 1, justifycontent: 'center', alignItems: 'center'}}>
      <Image
          style={styles.image}
          source={require('./assets/welcomelogo.png')}
      />
     </View>
     <View style={{padding: 10, flex: 1}}>
      <Button 
      color="dodgerblue"
      title="Log In" 
      onPress={() => Alert.alert("Hello!", "Did you have a nice day?", [{text: "Yes", onPress: () => console.log("button pressed - Yes")}, {text: "No", onPress: () => console.log("button pressed - No")}] )}/>
      {/* On Press => Log In View */}

      <Button 
      color="dodgerblue"
      title="Create Account" 
      onPress={() => Alert.alert("Hiya!", "Was the sky blue today?", [{text: "Yes", onPress: () => console.log("button pressed - Yes")}, {text: "No", onPress: () => console.log("button pressed - No")}] )}/>
      {/* On Press => Create Account View */}

      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


// Styles // 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifycontent: 'center',
    alignitmes: 'center',
  },
  image: {
    width: 200,
    height: 200,
    justifycontent: 'center',
    alignitmes: 'center',
}})

// const logostyle = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     logo: {
//       width: 200,
//       height: 200,
//       justifycontent: 'center',
//       alignitmes: 'center',
//   }
// }});

// for prompt: Alert.prompt("my title", "my message", text => console.log(text))} />