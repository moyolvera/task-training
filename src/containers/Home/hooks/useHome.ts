import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/core';

import { HomePropNavigation } from 'navigator/AppNavigationContainer';
import TodosService from '../../../services/TodosService';
import { TodoItem } from 'declaration/types';

const useHome = () => {
  const [title] = useState('Home');
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const route = useRoute<HomePropNavigation>();

  const todosService = new TodosService();

  const requestTodos = async () => {
    const todos = await todosService.getAllTodos<TodoItem[]>();
    if (todos.status && todos.response) {
      setTodos(todos.response);
    }
  };

  useEffect(() => {
    requestTodos();
  }, []);

  useEffect(() => {
    if (route.params && route.params.shouldReload) {
      requestTodos();
    }
  }, [route]);

  return {
    title,
    todos,
  };
};

export default useHome;
