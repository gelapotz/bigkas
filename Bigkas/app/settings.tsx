import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>
                Adjust your Bigkas experience and manage your preferences.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF4FF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        maxWidth: 260,
        lineHeight: 22,
    },
});
