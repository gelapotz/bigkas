import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const DEFINITIONS: Record<string, string> = {
    kumusta: 'A common greeting meaning "How are you?"',
    salamat: 'A polite expression meaning "Thank you."',
    paalam: 'A farewell expression meaning "Goodbye."',
};

export default function WordDetailsScreen() {
    const { id } = useLocalSearchParams();
    const word = String(id);
    const meaning = DEFINITIONS[word] || 'No definition available yet.';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{word}</Text>
            <Text style={styles.definition}>{meaning}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF4FF',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 16,
        textTransform: 'capitalize',
    },
    definition: {
        fontSize: 18,
        color: '#333',
        lineHeight: 24,
    },
});
