import { ScrollView, Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bigkas</Text>

      <TextInput
        style={styles.search}
        placeholder="Search words"
        placeholderTextColor="#777"
      />

      {/* Word of the Day Card */}
      <View style={styles.card}>
        <Text style={styles.cardWord}>Kumusta</Text>
        <Text style={styles.cardPhrase}>"Kumusta ka na?"</Text>

        <Text style={styles.cardReveal}>Tap to reveal</Text>

        {/* Icons Row */}
        <View style={styles.iconRow}>
          <Ionicons name="bookmark-outline" size={24} color="#4A6CFF" />
          <Ionicons name="volume-high-outline" size={24} color="#4A6CFF" />
        </View>
      </View>

      {/* Date below the card */}
      <Text style={styles.cardDate}>Word of the Day — February 9, 2026</Text>

      {/* Weekly Challenge Card */}
      <View style={styles.promoCard}>

        {/* Image Placeholder */}
        <View style={styles.promoImage} />

        <Text style={styles.promoTitle}>Weekly Challenge</Text>
        <Text style={styles.promoSubtitle}>Improve your Tagalog in 5 minutes</Text>

        <Text style={styles.promoBody}>
          Complete this week’s set of interactive exercises and earn a progress badge! ⭐
        </Text>

        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Play Now</Text>
        </TouchableOpacity>
      </View>

      <Text>Hello</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0038A8', // deep blue accent
  },
  search: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#444',
  },

  /* Word of the Day Card */
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  cardWord: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
    color: '#0038A8',
  },
  cardPhrase: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardReveal: {
    fontSize: 14,
    color: '#777',
    marginBottom: 16,
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  cardDate: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },

  /* Promo Card */
  promoCard: {
    backgroundColor: '#E8D8FF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  /* Image Placeholder */
  promoImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#D3B8FF',
    borderRadius: 12,
    marginBottom: 16,
  },

  promoTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#0038A8',
  },
  promoSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    color: '#444',
  },
  promoBody: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  promoButton: {
    backgroundColor: '#4A6CFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
