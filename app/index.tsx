import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Livraria Digital</Text>
            </View>
            <View>
                <Text style={styles.text}>Descubra seu próximo livro favorito"</Text>
            </View>

            <TouchableOpacity>
                <Text style={styles.text}>Explorar Livros</Text>
            </TouchableOpacity>
        </View>
    )
}

 const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },

        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#000',
        },

        text: {
            fontSize: 16,
            color: '#000',
        },

        btn: {
            backgroundColor: '#007BFF',
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
        }

    })