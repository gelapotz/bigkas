import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function DecksScreen() {
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const decks = [
    { title: 'Beginner Deck', words: 20 },
    { title: 'Travel Deck', words: 15 },
    { title: 'Food & Dining Deck', words: 18 },
  ];

  const openDeleteModal = (deckName: string) => {
    setSelectedDeck(deckName);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    // TODO: delete logic later
    console.log('Deleted:', selectedDeck);
    setModalVisible(false);
    setSelectedDeck(null);
  };

  return (
    <View style={styles.container}>

      {/* Custom App Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#0038A8" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Decks</Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Vocabulary Decks</Text>

        {decks.map((deck) => (
          <View key={deck.title} style={styles.card}>
            <View>
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text style={styles.deckSubtitle}>{deck.words} words</Text>
            </View>

            <TouchableOpacity onPress={() => openDeleteModal(deck.title)}>
              <Ionicons name="trash-outline" size={22} color="#C62828" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Delete Confirmation Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Delete Deck?</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to delete "{selectedDeck}"?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={confirmDelete}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FF',
    padding: 24,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#0038A8',
    marginRight: 24,
  },

  content: {
    paddingTop: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0038A8',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5EAF5',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  deckTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0038A8',
  },

  deckSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5EAF5',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0038A8',
    marginBottom: 10,
  },

  modalMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  cancelButton: {
    backgroundColor: '#E5EAF5',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },

  deleteButton: {
    backgroundColor: '#C62828',
  },
  deleteText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
