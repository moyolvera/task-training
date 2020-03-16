import React from 'react';
import { View, Text } from 'react-native';

import styles from './CardTicket.styles';
import useCardTicket from './hooks/useCardTicket';

const CardTicket = () => {
  const { name } = useCardTicket();

  return (
    <View style={styles.wrapper}>
      <Text>{name}</Text>
    </View>
  );
};

export default CardTicket;
