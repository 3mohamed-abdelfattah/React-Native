import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const showAlert = () => {
    Alert.alert('Button Pressed', 'You pressed the button!', [{ text: 'OK' }]);
  };

  return (
    <LinearGradient
      colors={['#FFDFD6', '#E3A5C7', '#694F8E']}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: 'https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.webp',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Hello World !!</Text>
        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#694F8E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
