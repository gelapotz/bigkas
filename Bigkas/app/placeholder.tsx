import { View, Text, StyleSheet } from 'react-native';

export default function Placeholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.subtitle}>This feature is not available yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3EDFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0038A8',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 8,
  },
});
