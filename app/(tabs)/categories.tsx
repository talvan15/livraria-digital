import { View, Text, StyleSheet} from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> Categories</Text>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});