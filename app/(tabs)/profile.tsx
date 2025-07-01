import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function profileScreen() {
  const person = {
    nome: "Jose Talvan",
    email: "talvan@alves.com",
    livrosLidos: 23,
    categoriaFavorita: "Ficção",
    livroslista: 5,
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="person" size={45} color="#495057" />
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.title}>Perfil</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.text}>Nome: {person.nome}</Text>
          <Text style={styles.text}>Email: {person.email}</Text>
          <Text style={styles.text}>Livros Lidos: {person.livrosLidos}</Text>
          <Text style={styles.text}> Categoria Favorita: {person.categoriaFavorita}</Text>
          <Text style={styles.text}>Livros na Lista: {person.livroslista}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  iconContainer: {
    marginBottom: 30,
    backgroundColor: "#e9ecef",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212529",
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
    color: "#495057",
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
    paddingTop: 15,
    marginTop: 15,
  },
});
