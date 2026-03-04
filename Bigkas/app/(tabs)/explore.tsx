import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Words</Text>
      <Text style={styles.subtitle}>Tap a word to learn more.</Text>
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
  },
});
