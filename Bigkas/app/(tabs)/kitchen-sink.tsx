import { ScrollView, Text, StyleSheet, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KitchenSink = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kitchen Sink</Text>

      {/* Search Bar Preview */}
      <View style={styles.box}>
        <Text style={styles.label}>Search Bar</Text>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search words"
            placeholderTextColor="#777"
          />
          <Ionicons name="search" size={20} color="#777" />
        </View>
      </View>

      {/* Word of the Day Card (Front) */}
      <View style={styles.box}>
        <Text style={styles.label}>Word of the Day Card (Front)</Text>

        <View style={styles.wotdCard}>
          <Text style={styles.wotdWord}>Kumusta</Text>
          <Text style={styles.wotdPhrase}>"Kumusta ka na?"</Text>
          <Text style={styles.wotdReveal}>Tap to reveal</Text>

          <View style={styles.wotdIconRow}>
            <Ionicons name="bookmark-outline" size={24} color="#4A6CFF" />
            <Ionicons name="volume-high-outline" size={24} color="#4A6CFF" />
          </View>
        </View>

        <Text style={styles.wotdDate}>Word of the Day — February 9, 2026</Text>
      </View>

      {/* Word of the Day Card (Revealed) */}
      <View style={styles.box}>
        <Text style={styles.label}>Word of the Day Card (Revealed)</Text>

        <View style={styles.wotdCard}>
          <Text style={styles.wotdWord}>Kumusta</Text>
          <Text style={styles.wotdPhrase}>Definition: to greet, to ask how someone is</Text>
          <Text style={styles.wotdReveal}>Tap to hide</Text>
        </View>
      </View>

      {/* Reusable Promo Card Preview */}
      <View style={styles.box}>
        <Text style={styles.label}>Promo Card</Text>

        <View style={styles.card}>
          <View style={styles.cardImage} />

          <Text style={styles.cardHeading}>Heading</Text>
          <Text style={styles.cardSubheading}>Subheading</Text>

          <Text style={styles.cardDescription}>
            Short description. Another sentence, just because.
          </Text>

          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Button</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Fixed Trial Component */}
      <View style={styles.box}>
        <Text style={styles.label}>Fixed Trial Component</Text>

        <View style={styles.trialContainer}>
          <View>
            <Text style={styles.trialTitle}>Activate 7-day free trial</Text>
            <Text style={styles.trialSubtitle}>Talk to Bigkas and get instant AI corrections</Text>
          </View>

          <Switch
            value={false}
            onValueChange={() => {}}
            thumbColor={'#FFF'}
            trackColor={{ false: '#CCC', true: '#BFD0FF' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default KitchenSink;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0038A8',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#0038A8',
  },

  /* Updated search bar, with trailing icon */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#444',
    marginRight: 8,
  },

  /* Word of the Day Card */
  wotdCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  wotdWord: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0038A8',
    textAlign: 'center',
  },
  wotdPhrase: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
    textAlign: 'center',
  },
  wotdReveal: {
    fontSize: 14,
    color: '#777',
    marginBottom: 16,
    textAlign: 'center',
  },
  wotdIconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  wotdDate: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
  },

  /* Reusable Promo Card */
  card: {
    backgroundColor: '#E8D8FF',
    padding: 20,
    borderRadius: 16,
  },
  cardImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#D3B8FF',
    borderRadius: 12,
    marginBottom: 16,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#0038A8',
  },
  cardSubheading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    color: '#444',
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  cardButton: {
    backgroundColor: '#4A6CFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  cardButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  /* Fixed Trial Component */
  trialContainer: {
    backgroundColor: '#E8D8FF',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trialTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0038A8',
  },
  trialSubtitle: {
    fontSize: 14,
    color: '#444',
  },
});
