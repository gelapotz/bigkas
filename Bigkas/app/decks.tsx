import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DecksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decks</Text>
      <Text style={styles.subtitle}>
        This screen will show your vocabulary decks.
      </Text>
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
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});
