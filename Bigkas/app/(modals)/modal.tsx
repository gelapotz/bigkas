import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function AboutModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Bigkas</Text>

      <Text style={styles.body}>
        Bigkas is a Tagalog learning companion designed to help you build
        vocabulary, improve pronunciation, and explore new words every day.
      </Text>

      <Text style={styles.body}>
        Bigkas is a Tagalog learning companion designed to help you build
        vocabulary, improve pronunciation, and explore new words every day.
      </Text>


      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: '700',
    color: '#0038A8',
    marginBottom: 20,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#0038A8',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
