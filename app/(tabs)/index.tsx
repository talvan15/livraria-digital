import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function bookScreen() {
  interface Book {
    id: number;
    title: string;
    author: string;
    category: string;
    year: number;
    description: string;
    coverImage?: string;
  }

  const books: Book[] = [
    {
      id: 1,
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      category: "Fantasia",
      year: 1954,
      description: "Uma épica jornada pela Terra Média.",
      coverImage: "https://covers.openlibrary.org/b/olid/OL30095043M.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Ficção",
      year: 1949,
      description: "Um clássico sobre vigilância e controle.",
      coverImage: "https://covers.openlibrary.org/b/olid/OL58946388M.jpg",
    },
    {
      id: 3,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      category: "Romance",
      year: 1899,
      description: "A história de amor de Bentinho e Capitu.",
      coverImage: "https://covers.openlibrary.org/b/olid/OL9157135M.jpg",
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Harari",
      category: "História",
      year: 2011,
      description: "A história da humanidade em 300 páginas.",
      coverImage: "https://covers.openlibrary.org/b/olid/OL49829510M.jpg",
    },
    {
    id: 5,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    category: "Infantil",
    year: 1943,
    description: "Uma fábula sobre amor, amizade e perda.",
    coverImage: "https://covers.openlibrary.org/b/olid/OL35669163M.jpg",
  },
  {
    id: 6,
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    category: "Fábula política",
    year: 1945,
    description: "Uma crítica ao totalitarismo disfarçada de conto animal.",
    coverImage: "https://covers.openlibrary.org/b/olid/OL33019280M.jpg",
  },
  {
    id: 7,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Tecnologia",
    year: 2008,
    description: "Um guia de boas práticas para escrever código limpo e eficiente.",
    coverImage: "https://covers.openlibrary.org/b/olid/OL41866115M.jpg",
  },
 
  ];

  const renderItem = ({ item }: { item: Book }) => (
    <View style={Styles.imageCard}>
      <Image
        source={{ uri: item.coverImage }}
        style={Styles.bookCover}
        resizeMode="contain"
      />
      <View style={Styles.contentCard}>
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>
          {item.category} - {item.year}
        </Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
  return (
    <View style={Styles.container}>
      <View>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  imageCard: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  contentCard: {
    flexDirection: "column",
    marginLeft: 10,
  },

  bookCover: {
    width: 60,
    height: 90,
    borderRadius: 4,
  },
});
