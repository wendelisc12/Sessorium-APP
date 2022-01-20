import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Turmas = () => (
  <Card style={{marginVertical: 20,  marginHorizontal: 10}}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Matéria: </Title>
      <Paragraph>Professor:</Paragraph>
    </Card.Content>
    <Card.Actions>
     
    </Card.Actions>
  </Card>
);

export default Turmas;