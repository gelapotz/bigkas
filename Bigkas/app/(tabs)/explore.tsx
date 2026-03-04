import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>

      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.appBarTitle}>Explore</Text>

        <Ionicons name="book-outline" size={24} color="#FFFFFF" />
      </View>

      {/* Content */}
      <View style={styles.content}>
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FF',
  },

  appBar: {
    backgroundColor: '#0A4CB8',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  content: {
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
