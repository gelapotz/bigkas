import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ChallengeScreen() {
    const { id } = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{ title: `Challenge ${id}` }} />
            <View style={styles.container}>
                <Text style={styles.title}>Weekly Challenge</Text>
                <Text style={styles.body}>Challenge ID: {id}</Text>
                <Text style={styles.body}>This is a placeholder screen.</Text>
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
