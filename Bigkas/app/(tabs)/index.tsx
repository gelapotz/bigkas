import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, View, TouchableOpacity, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Index() {
  const [revealed, setRevealed] = useState(false);
  const [trialEnabled, setTrialEnabled] = useState(false);

  return (
    <View style={{ flex: 1 }}>

      {/* App Bar */}
      <View style={styles.appBar}>
        <Ionicons name="menu" size={28} color="#FFFFFF" />
        <Text style={styles.appBarTitle}>Bigkas</Text>
        <Ionicons name="person-circle-outline" size={28} color="#FFFFFF" />
      </View>

      <ScrollView style={styles.container}>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search words"
            placeholderTextColor="#777"
          />
          <Ionicons name="search" size={20} color="#0038A8" />
        </View>

        {/* Word of the Day */}
        <TouchableOpacity onPress={() => setRevealed(!revealed)}>
          <View style={styles.heroCard}>
            <View style={styles.heroInner}>

              {revealed ? (
                <>
                  <Text style={styles.heroWord}>Kumusta</Text>
                  <Text style={styles.heroDefinition}>Definition: to greet, to ask how someone is</Text>
                  <Text style={styles.heroHint}>Tap to hide</Text>
                </>
              ) : (
                <>
                  <Text style={styles.heroWord}>Kumusta</Text>
                  <Text style={styles.heroExample}>"Kumusta ka na?"</Text>
                  <Text style={styles.heroHint}>Tap to reveal</Text>
                </>
              )}

              {/* Icons always visible */}
              <View style={styles.heroIcons}>
                <Ionicons name="bookmark-outline" size={24} color="#FCD116" />
                <Ionicons name="volume-high-outline" size={24} color="#FCD116" />
              </View>

            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.heroDate}>Word of the Day — February 9, 2026</Text>

        {/* Explore More */}
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreTitle}>Explore more vocabulary</Text>
          <Text style={styles.exploreSubtitle}>
            Study new words with flashcards and grow your Tagalog mastery.
          </Text>

          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/placeholder')}
          >
            <Text style={styles.exploreButtonText}>Browse Decks</Text>
          </TouchableOpacity>
        </View>

        {/* Weekly Challenge */}
        <View style={styles.promoCardLightBlue}>
          <Image
            source={require('../../assets/images/weekly.jpg')}
            style={styles.promoImage}
            resizeMode="cover"
          />

          <View style={styles.promoContent}>
            <Text style={styles.promoTitleBlue}>Weekly Challenge</Text>
            <Text style={styles.promoSubtitleBlue}>Improve your Tagalog in 5 minutes</Text>

            <Text style={styles.promoBodyBlue}>
              Complete this week’s set of interactive exercises and earn a progress badge! ⭐
            </Text>

            <TouchableOpacity style={styles.promoButtonBlue} onPress={() => router.push('/placeholder')}>
              <Text style={styles.promoButtonTextWhite}>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Quiz */}
        <View style={styles.promoCardLightBlue}>
          <Image
            source={require('../../assets/images/quiz.jpg')}
            style={styles.promoImage}
            resizeMode="cover"
          />

          <View style={styles.promoContent}>
            <Text style={styles.promoTitleBlue}>Quick Quiz</Text>
            <Text style={styles.promoSubtitleBlue}>Test your understanding</Text>

            <Text style={styles.promoBodyBlue}>
              Answer 5 short questions based on today’s vocabulary and track your improvement.
            </Text>

            <TouchableOpacity style={styles.promoButtonBlue} onPress={() => router.push('/placeholder')}>
              <Text style={styles.promoButtonTextWhite}>Begin Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Word Discovery */}
        <View style={styles.promoCardLightBlue}>
          <Image
            source={require('../../assets/images/discovery.jpg')}
            style={styles.promoImage}
            resizeMode="cover"
          />

          <View style={styles.promoContent}>
            <Text style={styles.promoTitleBlue}>Word Discovery</Text>
            <Text style={styles.promoSubtitleBlue}>Explore new Tagalog terms</Text>

            <Text style={styles.promoBodyBlue}>
              Dive into definitions, examples, and usage notes to expand your understanding.
            </Text>

            <TouchableOpacity style={styles.promoButtonBlue} onPress={() => router.push('/placeholder')}>
              <Text style={styles.promoButtonTextWhite}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* Trial Bar */}
      <View style={styles.trialContainer}>
        <View>
          <Text style={styles.trialTitle}>Activate 7-day free trial</Text>
          <Text style={styles.trialSubtitle}>Talk to Bigkas and get instant AI corrections</Text>
        </View>

        <Switch
          value={trialEnabled}
          onValueChange={setTrialEnabled}
          thumbColor={trialEnabled ? '#0038A8' : '#FFF'}
          trackColor={{ false: '#CCC', true: '#C7D8FF' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  /* Screen Container */
  container: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#EEF4FF',
  },

  /* App Bar */
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: '#0A4CB8',
    elevation: 4,
  },
  appBarTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  /* Search Bar */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5EAF5',
    marginBottom: 28,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#555',
    marginRight: 8,
  },

  /* Word of the Day */
  heroCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5EAF5',
    elevation: 1,
  },
  heroInner: {
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  heroWord: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0038A8',
    textAlign: 'center',
  },
  heroExample: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroDefinition: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroHint: {
    fontSize: 14,
    color: '#777',
    marginBottom: 12,
  },
  heroIcons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 8,
  },
  heroDate: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginBottom: 28,
  },

  /* Explore More (Dark Card + Yellow CTA) */
  exploreContainer: {
    backgroundColor: '#0038A8',
    padding: 24,
    borderRadius: 20,
    marginBottom: 28,
    alignItems: 'center',
  },
  exploreTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  exploreSubtitle: {
    fontSize: 14,
    color: '#E6ECFF',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
    maxWidth: 260,
  },
  exploreButton: {
    backgroundColor: '#FCD116',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  exploreButtonText: {
    color: '#0038A8',
    fontWeight: '700',
    fontSize: 14,
  },

  /* PROMO CARDS */
  promoCardLightBlue: {
    backgroundColor: '#DDE8FF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 28,
  },

  /* NEW IMAGE STYLE */
  promoImage: {
    width: '100%',
    height: 120,
  },

  /* Promo Content */
  promoContent: {
    padding: 20,
    gap: 8,
  },

  /* Promo Text */
  promoTitleBlue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0038A8',
  },
  promoSubtitleBlue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0038A8',
    opacity: 0.9,
  },
  promoBodyBlue: {
    fontSize: 14,
    color: '#0038A8',
    opacity: 0.9,
    marginBottom: 20,
    lineHeight: 20,
  },

  /* Buttons */
  promoButtonBlue: {
    backgroundColor: '#0038A8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    minWidth: 150,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  promoButtonTextWhite: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  /* Trial Bar */
  trialContainer: {
    backgroundColor: '#E3EDFF',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#D0DFFF',
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
    color: '#0038A8',
    opacity: 0.8,
  },
});
