import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function WordDetailsScreen() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{id}</Text>
            <Text style={styles.subtitle}>This is the word details screen.</Text>
            <Text style={styles.body}>
                In the next steps, we will add real definitions and examples.
            </Text>
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
        marginBottom: 12,
        textTransform: 'capitalize',
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    body: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },
});
