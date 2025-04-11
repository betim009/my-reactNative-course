import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Data } from '../types/data'
import ListItems from '../components/list_items';

export default function Index() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function load() {
      const req = await fetch('https://67b5223ba9acbdb38ed16600.mockapi.io/api/v1/foods');
      const res = await req.json();
      setData(res);
    };

    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lanches</Text>
      {data.length === 0 ? <Text>Loading</Text> : <ListItems data={data} />}
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
    fontSize: 30,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  }
});
