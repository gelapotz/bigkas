import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DecksScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Decks</Text>
            <Text style={styles.subtitle}>Your vocabulary collections</Text>

            <View style={styles.list}>
                <View style={styles.deckCard}>
                    <Text style={styles.deckTitle}>Beginner Deck</Text>
                    <Text style={styles.deckCount}>20 words</Text>
                </View>

                <View style={styles.deckCard}>
                    <Text style={styles.deckTitle}>Travel Deck</Text>
                    <Text style={styles.deckCount}>15 words</Text>
                </View>

                <View style={styles.deckCard}>
                    <Text style={styles.deckTitle}>Food & Dining Deck</Text>
                    <Text style={styles.deckCount}>18 words</Text>
                </View>
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
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    list: {
        gap: 16,
    },
    deckCard: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5EAF5',
    },
    deckTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0038A8',
    },
    deckCount: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});
