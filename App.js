import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <Text>text large a realy really long text text large a realy really long 
        text text large a realy really long text </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
