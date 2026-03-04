import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function DiscoveryScreen() {
  return (
    <View style={styles.container}>

      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.appBarTitle}>Bigkas</Text>

        <Ionicons name="book-outline" size={24} color="#FFFFFF" />
      </View>

      {/* Content */}
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
