import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function ChallengeWeekScreen() {
    const { week } = useLocalSearchParams();

    return (
        <View style={styles.container}>

            {/* Custom App Bar */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#0038A8" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Weekly Challenge</Text>

                {/* Spacer */}
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Week {week}</Text>
                <Text style={styles.subtitle}>
                    This screen will show the weekly challenge content.
                </Text>
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

    content: {
        paddingTop: 8,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
    },
});
