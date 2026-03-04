import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function QuizScreen() {
    const { id } = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{ title: `Quiz ${id}` }} />
            <View style={styles.container}>
                <Text style={styles.title}>Quick Quiz</Text>
                <Text style={styles.body}>Quiz ID: {id}</Text>
                <Text style={styles.body}>This is a placeholder screen. You can customize it later.</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF4FF',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0038A8',
        marginBottom: 16,
        textAlign: 'center',
    },
    body: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
});
