import React from 'react';

import useHome from './hooks/useHome';
import Layout from '../../components/Layout/Layout';
import { Text, View } from 'native-base';
import styles from './Home.styles';
import HomeList from '../../components/HomeList/HomeList';
import { ScrollView } from 'react-native';

const Home = () => {
  const { storage, todos, title } = useHome();

  return (
    <Layout title={title}>
      <Text style={styles.subtitle}>Home todos</Text>
      <ScrollView style={styles.storage}>
        <Text>{JSON.stringify(storage)}</Text>
      </ScrollView>
      <View style={styles.simpleFlex}>
        <HomeList todos={todos} />
      </View>
    </Layout>
  );
};

export default Home;
