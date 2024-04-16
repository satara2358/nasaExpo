import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4923e1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App