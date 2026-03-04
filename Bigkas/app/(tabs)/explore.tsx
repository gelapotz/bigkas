import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Words</Text>
      <Text style={styles.subtitle}>Tap a word to learn more.</Text>

      <View style={styles.list}>
        <TouchableOpacity onPress={() => router.push('/word/kumusta')}>
          <Text style={styles.word}>Kumusta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/word/salamat')}>
          <Text style={styles.word}>Salamat</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/word/paalam')}>
          <Text style={styles.word}>Paalam</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FF',
    padding: 20,
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
  list: {
    gap: 12,
  },
  word: {
    fontSize: 18,
    color: '#0038A8',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5EAF5',
    fontWeight: '600',
  },
});
