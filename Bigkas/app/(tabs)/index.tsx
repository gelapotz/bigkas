import { ScrollView, Text, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bigkas</Text>

      <TextInput
        style={styles.search}
        placeholder="Search words"
      />

      {/* Word of the Day Card */}
      <View style={styles.card}>
        <Text style={styles.cardWord}>Kumusta</Text>
        <Text style={styles.cardPhrase}>"Kumusta ka na?"</Text>

        <Text style={styles.cardReveal}>Tap to reveal</Text>
        <Text style={styles.cardDate}>Word of the Day — February 9, 2026</Text>

        {/* Icons Row */}
        <View style={styles.iconRow}>
          <Ionicons name="bookmark-outline" size={24} color="#555" />
          <Ionicons name="volume-high-outline" size={24} color="#555" />
        </View>
      </View>

      <Text>Hello</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ceffaa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  search: {
    backgroundColor: '#f5ffed',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  cardWord: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardPhrase: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 16,
  },
  cardReveal: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 12,
  },
  cardDate: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
});
