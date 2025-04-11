import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useApp } from '../context/AppProvider';

export default function Index() {
  const { nome } = useApp();

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
