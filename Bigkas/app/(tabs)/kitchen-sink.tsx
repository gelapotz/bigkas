import { ScrollView, Text, StyleSheet, View, TextInput } from 'react-native';

const KitchenSink = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kitchen Sink</Text>

      {/* Search Bar Preview */}
      <View style={styles.box}>
        <Text style={styles.label}>Search Bar</Text>
        <TextInput
          style={styles.search}
          placeholder="Search words"
        />
      </View>

      {/* Card Preview */}
      <View style={styles.box}>
        <Text>Card</Text>
      </View>

      {/* Buttons, Toggles, etc. */}
      <View style={styles.box}>
        <Text>Buttons, toggles, etc.</Text>
      </View>
    </ScrollView>
  );
};

export default KitchenSink;

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
  box: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  search: {
    backgroundColor: '#f5ffed',
    padding: 12,
    borderRadius: 8,
  },
});
