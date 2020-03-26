import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useRoute } from '@react-navigation/core';
import Animated, { Easing } from 'react-native-reanimated';

import { HomePropNavigation } from 'navigator/AppNavigationContainer';
import TodosService from '../../../services/TodosService';
import HomeServices from '../../../services/HomeServices';
import { TodoItem } from 'declaration/types';
import { Alert } from 'react-native';

const useHome = () => {
  const [title] = useState('Home');
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const route = useRoute<HomePropNavigation>();

  const [storage, setStorage] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  const todosService = new TodosService();
  const homeServices = new HomeServices();

  const checkStorage = async () => {
    const data = await AsyncStorage.getItem('userData');

    if (data) {
      console.log(data);
      setStorage(data);
    }
  };

  const requestTodos = async () => {
    const todos = await todosService.getAllTodos<TodoItem[]>();
    if (todos.status && todos.response) {
      setTodos(todos.response);
    }
  };

  const requestGeoPosition = async () => {
    const position = await homeServices.getGeoPosition();
    Alert.alert(JSON.stringify(position));
  };

  useEffect(() => {
    requestTodos();
    checkStorage();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
    }).start();
  }, []);

  useEffect(() => {
    if (route.params && route.params.shouldReload) {
      requestTodos();
    }
  }, [route]);

  return {
    checkStorage,
    fadeAnim,
    title,
    todos,
    storage,
    requestGeoPosition,
  };
};

export default useHome;
