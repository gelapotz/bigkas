import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function QuizScreen() {
    const { level } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quiz</Text>
            <Text style={styles.level}>Level: {level}</Text>
            <Text style={styles.subtitle}>This screen will show quiz questions for this level.</Text>
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
        fontSize: 30,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 10,
    },
    level: {
        fontSize: 22,
        fontWeight: '600',
        color: '#0038A8',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
    },
});
