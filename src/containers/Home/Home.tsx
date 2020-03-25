import React from 'react';

import useHome from './hooks/useHome';
import Layout from '../../components/Layout/Layout';
import { Text, View } from 'native-base';
import styles from './Home.styles';
import HomeList from '../../components/HomeList/HomeList';

const Home = () => {
  const { todos, title } = useHome();

  return (
    <Layout title={title}>
      <Text style={styles.subtitle}>Home todos</Text>
      <View style={styles.simpleFlex}>
        <HomeList todos={todos} />
      </View>
    </Layout>
  );
};

export default Home;
