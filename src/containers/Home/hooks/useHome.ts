import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useRoute } from '@react-navigation/core';

import { HomePropNavigation } from 'navigator/AppNavigationContainer';
import TodosService from '../../../services/TodosService';
import { TodoItem } from 'declaration/types';

const useHome = () => {
  const [title] = useState('Home');
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const route = useRoute<HomePropNavigation>();

  const [storage, setStorage] = useState('');

  const todosService = new TodosService();

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

  useEffect(() => {
    requestTodos();
    checkStorage();
  }, []);

  useEffect(() => {
    if (route.params && route.params.shouldReload) {
      requestTodos();
    }
  }, [route]);

  return {
    checkStorage,
    title,
    todos,
    storage,
  };
};

export default useHome;
