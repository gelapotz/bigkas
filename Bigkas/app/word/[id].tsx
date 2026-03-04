import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const DEFINITIONS: Record<string, string> = {
    kumusta: 'A common greeting meaning "How are you?"',
    salamat: 'A polite expression meaning "Thank you."',
    paalam: 'A farewell expression meaning "Goodbye."',
};

export default function WordDetailsScreen() {
    const { id } = useLocalSearchParams();
    const word = String(id).toLowerCase();
    const meaning = DEFINITIONS[word] || 'No definition available yet.';

    return (
        <View style={styles.container}>

            {/* Custom App Bar */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#0038A8" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Word Details</Text>

                <View style={{ width: 24 }} />
            </View>

            {/* Word Card */}
            <View style={styles.card}>
                <Text style={styles.word}>{word}</Text>
                <Text style={styles.definition}>{meaning}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF4FF',
        padding: 24,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: '#0038A8',
        marginRight: 24,
    },

    card: {
        backgroundColor: '#FFFFFF',
        padding: 24,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E5EAF5',
    },

    word: {
        fontSize: 32,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 12,
        textTransform: 'capitalize',
    },

    definition: {
        fontSize: 18,
        color: '#333',
        lineHeight: 26,
    },
});
