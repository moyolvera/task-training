import { useState, useReducer } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/core';

import { AddTodoReducer, initialState, AddTodoActions } from '../reducer/reducer';

const useAddTicket = () => {
  const [title] = useState('Add Ticket');
  const { navigate } = useNavigation();

  const [state, dispatch] = useReducer(AddTodoReducer, initialState);

  const updateData = (text: string, field: string) => {
    dispatch(AddTodoActions.updateProp(field, text));
  };

  const clearData = () => {
    dispatch(AddTodoActions.clearForm());
  };

  const submitData = () => {
    if (!state.id || !state.title || !state.userId) {
      return;
    }

    Alert.alert('Hola', 'Bienvenido', [
      {
        text: 'Gracias',
        onPress: () => saveDataClearFormAndNavigate(),
      },
    ]);
  };

  const saveDataClearFormAndNavigate = async () => {
    await AsyncStorage.setItem('userData', JSON.stringify(state));
    clearData();
    navigate('Home');
  };

  return {
    state,
    title,
    navigate,

    clearData,
    submitData,
    updateData,
  };
};

export default useAddTicket;
