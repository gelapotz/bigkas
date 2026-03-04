import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function QuizScreen() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>

            {/* Custom App Bar */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#0038A8" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Quiz</Text>

                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Quick Quiz</Text>
                <Text style={styles.body}>Quiz ID: {id}</Text>
                <Text style={styles.body}>
                    This is a placeholder screen. Quiz content will be implemented here.
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
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 16,
        textAlign: 'center',
    },
    body: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
});
