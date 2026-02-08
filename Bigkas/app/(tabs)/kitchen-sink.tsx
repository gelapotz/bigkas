import { ScrollView, Text, StyleSheet, View } from 'react-native';

const KitchenSink = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kitchen Sink</Text>

      <View style={styles.box}>
        <Text>Search Bar</Text>
      </View>

      <View style={styles.box}>
        <Text>Card</Text>
      </View>

      <View style={styles.box}>
        <Text>Buttons, Toggles, etc.</Text>
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
});
