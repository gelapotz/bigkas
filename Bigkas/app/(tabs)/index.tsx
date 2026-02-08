import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bigkas</Text>

      <TextInput
        style={styles.search}
        placeholder="Search words"
      />

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
});
