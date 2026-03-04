import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ChallengeScreen() {
    const { week } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weekly Challenge</Text>
            <Text style={styles.week}>Week: {week}</Text>
            <Text style={styles.subtitle}>This screen will show the weekly challenge content.</Text>
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
    week: {
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
