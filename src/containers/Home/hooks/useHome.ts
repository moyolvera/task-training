import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/core';
import { Alert } from 'react-native';
import { HomePropNavigation } from 'navigator/AppNavigationContainer';

const mockedData = [
  {
    id: 'MC-123',
    reviewer: 'Juan',
    estimate: 2.0,
  },
  {
    id: 'MC-123',
    reviewer: 'Juan',
    estimate: 2.0,
  },
  {
    id: 'MC-123',
    reviewer: 'Juan',
    estimate: 2.0,
  },
];

const useHome = () => {
  const [title] = useState('Home');
  const route = useRoute<HomePropNavigation>();

  return {
    title,
    mockedData,
  };
};

export default useHome;
