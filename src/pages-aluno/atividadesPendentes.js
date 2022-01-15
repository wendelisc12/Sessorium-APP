import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native-web';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const AtividadesPendentes = () => (
    
    <View>
        <Card>
            <Card.Content>
                <Title>Atividades pendentes </Title>
                <Paragraph>Aviso:</Paragraph>
            </Card.Content>
            <Card.Actions>

            </Card.Actions>
        </Card>
    </View>

);

export default AtividadesPendentes;