import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';

export default function App() {
  return (
    <View style={{ flex: 1 }} >
      <Appbar.Header style={{ backgroundColor: '#32E535' }}>

        <Appbar.Content title="Sessorium" style={styles.titulo} />

      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Boletim do aluno</Title>

        </Card.Content>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    marginTop: '20%',
    width: '50%'
  }
});
