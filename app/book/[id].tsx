import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function BookDetail() {
  const router = useRouter();
  const { id, title, author, category, year, description } =
    useLocalSearchParams();

  const handleAdd = () => Alert.alert("Livro adicionado!");
  const handleShare = () => Alert.alert("Link copiado!");
  const handleBack = () => router.back();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.card}>
          <Text style={styles.label}>
            Autor: <Text style={styles.text}>{author}</Text>
          </Text>
          <Text style={styles.label}>
            Ano: <Text style={styles.text}>{year}</Text>
          </Text>
          <Text style={styles.label}>
            Categoria: <Text style={styles.text}>{category}</Text>
          </Text>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.text}>{description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button color= "#007BFF" title="Adicionar à Lista" onPress={handleAdd} />
          <Button color= "#007BFF" title="Compartilhar" onPress={handleShare} />
          <Button color= "#007BFF" title="Voltar" onPress={handleBack} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer:{
    width: "100%",
    maxWidth: 350,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  card: {
    padding: 16,
    borderRadius: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 8,
  },
  text: {
    fontWeight: "normal",
  },
  buttonContainer: {
    marginTop: 24,
    gap: 10,
  },
  button:{
    backgroundColor: "#007BFF",
    borderRadius: 10,
  },
});
