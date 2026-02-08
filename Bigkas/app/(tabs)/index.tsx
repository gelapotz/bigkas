import { ScrollView, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hello</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ceffaa',
  },
});
