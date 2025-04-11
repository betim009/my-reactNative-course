import { FlatList, View, Image, Text, StyleSheet } from "react-native";
import { Props } from '../../types/data';

export default function ListItems({ data }: Props) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Image source={{ uri: item.imagem }} style={styles.image} />
                    <View>
                        <Text style={styles.text}>{item.nome}</Text>
                        <Text style={styles.text}>{item.preco}</Text>
                    </View>
                </View>
            )}
            showsVerticalScrollIndicator={false} // <-- ISSO REMOVE A BARRA!
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        paddingVertical: 10,
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        marginLeft: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    }
});
