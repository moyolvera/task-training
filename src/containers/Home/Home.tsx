import React from 'react';
import { View, Text } from 'react-native';

import { CardTicket } from 'components';
import styles from './Home.styles';
import useHome from './hooks/useHome';

const Home = () => {
  const { title } = useHome();

  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <CardTicket />
    </View>
  );
};

export default Home;
