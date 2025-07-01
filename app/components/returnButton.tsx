import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReturnButton() {
    
    const router = useRouter();
    return (
        <MaterialIcons
            name="arrow-back"
            size={24}
            color="#000"
            onPress={() => router.back()}
            style={{ marginLeft: 10, marginTop: 5 }}
        />
    );
}