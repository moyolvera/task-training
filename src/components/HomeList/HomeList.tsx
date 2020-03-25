import React from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'native-base';

import { TodoItem } from '../../declaration/types';
import styles from './HomeList.styles';

const HomeList = ({ todos }: { todos: TodoItem[] }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <View style={styles.row}>
            <View style={styles.simpleFlex}>
              <Text>{item.id}</Text>
            </View>
            <View style={styles.simpleFlex}>
              <Text>{item.title}</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(todo: TodoItem) => String(todo.id)}
    />
  );
};

export default HomeList;
