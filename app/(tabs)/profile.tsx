import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function profileScreen() {
  interface Profile {
    nome: string;
    email: string;
    estatisticas: [];
  }

  const person = [
    {nome: "Jeferson queiroga"},
    {email: "jeferson@livraria.com"},
    {estatisticas:[{livrosLidos: 23}, {categoriaFavorita: "Romance"}, {livroslista: 5}]}
  ]

  return (
    <View style={styles.container}>
      <MaterialIcons name='person' size={30} />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});