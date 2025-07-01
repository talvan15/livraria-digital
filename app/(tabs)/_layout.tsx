import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import ReturnButton from "../components/returnButton";
import { useRouter } from "expo-router";

export default function TabBarLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <ReturnButton />,
        headerTitleAlign: 'center',
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            marginBottom: 10,
        },
        headerShown: true,
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Livros",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="book" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categorias",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
