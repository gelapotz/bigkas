import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function DiscoveryScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.title}>Word Discovery</Text>
        <Text style={styles.subtitle}>
          Curated words and learning insights.
        </Text>

        <View style={styles.card}>
          <Text style={styles.word}>Hinay</Text>
          <Text style={styles.definition}>Meaning: slow, gentle, careful</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.word}>Giliw</Text>
          <Text style={styles.definition}>Meaning: beloved, dear one</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.word}>Tadhana</Text>
          <Text style={styles.definition}>Meaning: destiny, fate</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FF',
  },

  content: {
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0038A8',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5EAF5',
    marginBottom: 14,
  },
  word: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0038A8',
  },
  definition: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
