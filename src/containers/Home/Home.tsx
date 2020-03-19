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
  Footer,
  FooterTab,
  Text,
} from 'native-base';

import useHome from './hooks/useHome';
import { FlatList } from 'react-native';

const Home = () => {
  const { mockedData, title } = useHome();

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
      <Content contentContainerStyle={{ padding: 20 }}>
        <Text>{JSON.stringify(mockedData, null, 2)}</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Home;
