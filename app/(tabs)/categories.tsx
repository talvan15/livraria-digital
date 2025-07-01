import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function categoriesScreen() {
  interface Category {
    name: string;
    count: number;
    color: string;
  }

  const categories = [
    { name: "Fantasia", count: 12, color: "#8B5CF6" },
    { name: "Ficção", count: 8, color: "#EF4444" },
    { name: "Romance", count: 15, color: "#F59E0B" },
    { name: "História", count: 6, color: "#10B981" },
    { name: "Tecnologia", count: 9, color: "#3B82F6" },
  ];
  function message(category: Category) {
    Alert.alert(
      "Detalhes da Categoria",
      `Categoria ${category.name} tem ${category.count} livros`
    );
  }

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity onPress={() => message(item)}>
      <View
        style={{
          backgroundColor: item.color,
          padding: 20,
          marginVertical: 10,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <Text>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
