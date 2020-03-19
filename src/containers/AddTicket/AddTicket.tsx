import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Text,
  Item,
  Label,
  Input,
} from 'native-base';

import useAddTicket from './hooks/useAddTicket';
import styles from './AddTicket.styles';

const AddTicket = () => {
  const { title, navigate } = useAddTicket();

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" type="Feather" />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.wrapper}>
        <Item stackedLabel style={{ marginBottom: 20 }}>
          <Label>ID:</Label>
          <Input placeholder="Enter the ticket id" />
        </Item>
        <Item stackedLabel style={{ marginBottom: 20 }}>
          <Label>Estimate:</Label>
          <Input placeholder="In days" />
        </Item>
        <Item stackedLabel style={{ marginBottom: 20 }}>
          <Label>Reviewer:</Label>
          <Input placeholder="Who is checking your PRs" />
        </Item>
        <Button onPress={() => navigate('Home', { shouldReload: true })} style={styles.button}>
          <Text>Save ticket</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default AddTicket;
