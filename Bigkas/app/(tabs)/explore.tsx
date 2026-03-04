import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Words</Text>
      <Text style={styles.subtitle}>Tap a word to learn more.</Text>

      <View style={styles.list}>
        <Text style={styles.word}>Kumusta</Text>
        <Text style={styles.word}>Salamat</Text>
        <Text style={styles.word}>Paalam</Text>
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
