import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function bookScreen() {

  interface Book{
    id: number;
    title: string;
    author: string;
    category: string;
    year: number;
    description: string;
  }

  const books = [
    {
      id: 1,
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      category: "Fantasia",
      year: 1954,
      description: "Uma épica jornada pela Terra Média.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Ficção",
      year: 1949,
      description: "Um clássico sobre vigilância e controle.",
    },
    {
      id: 3,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      category: "Romance",
      year: 1899,
      description: "A história de amor de Bentinho e Capitu.",
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Harari",
      category: "História",
      year: 2011,
      description: "A história da humanidade em 300 páginas.",
    },
  ];

  const renderItem = ({item}: {item:Book}) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.author}</Text>
      <Text>
        {item.category} - {item.year}
      </Text>
      <Text>{item.description}</Text>
    </View>
  );
  return (
    <View style={Styles.container}>
      <View>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={Styles.listStyles}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listStyles: {
    padding: 10,
  },
});
