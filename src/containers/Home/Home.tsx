import React from 'react';

import useHome from './hooks/useHome';
import { FlatList } from 'react-native';
import Layout from '../../components/Layout/Layout';
import { Text, View } from 'native-base';
import { TodoItem } from 'declaration/types';
import styles from './Home.styles';

const Home = () => {
  const { todos, title } = useHome();

  return (
    <Layout title={title}>
      <View style={styles.simpleFlex}>
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
      </View>
    </Layout>
  );
};

export default Home;
