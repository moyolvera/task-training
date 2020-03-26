import React from 'react';
import Animated from 'react-native-reanimated';
import { Text, View, Button } from 'native-base';
import { ScrollView, Image } from 'react-native';

import useHome from './hooks/useHome';
import Layout from '../../components/Layout/Layout';
import styles from './Home.styles';
import HomeList from '../../components/HomeList/HomeList';

const imageUrl = 'https://pbs.twimg.com/profile_images/3750853704/36fdc371baafa84ddfb35f5d31d40cea_400x400.png';

const Home = () => {
  const { storage, todos, title, fadeAnim, requestGeoPosition } = useHome();

  return (
    <Layout title={title}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </Animated.View>
      <Button onPress={requestGeoPosition}>
        <Text>Get geolocation info</Text>
      </Button>
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
