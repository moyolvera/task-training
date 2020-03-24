import React from 'react';
import { Container, Header, Title, Content, Left, Button, Icon, Body, Right } from 'native-base';
import styles from './Layout.styles';

const Layout = ({ title, children }: { title: string; children: React.ReactNode }) => {
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
      <Content contentContainerStyle={styles.wrapper}>{children}</Content>
    </Container>
  );
};

export default Layout;
