import React from 'react';
import { Button, Text, Item, Label, Input } from 'native-base';

import useAddTodo from './hooks/useAddTodo';
import styles from './AddTodo.styles';
import Layout from '../../components/Layout/Layout';

const AddTodo = () => {
  const { state, title, submitData, updateData, clearData } = useAddTodo();

  return (
    <Layout title={title}>
      <Item stackedLabel style={{ marginBottom: 20 }}>
        <Label>ID:</Label>
        <Input
          placeholder="Enter the ticket id"
          value={String(state.id)}
          onChangeText={(text) => updateData(text, 'id')}
        />
      </Item>
      <Item stackedLabel style={{ marginBottom: 20 }}>
        <Label>User Id:</Label>
        <Input
          placeholder="Enter the user id"
          value={String(state.userId)}
          onChangeText={(text) => updateData(text, 'userId')}
        />
      </Item>
      <Item stackedLabel style={{ marginBottom: 20 }}>
        <Label>Title:</Label>
        <Input
          placeholder="Enter the title"
          value={String(state.title)}
          onChangeText={(text) => updateData(text, 'title')}
        />
      </Item>
      <Button onPress={() => submitData()} style={styles.button}>
        <Text>Save ticket</Text>
      </Button>
    </Layout>
  );
};

export default AddTodo;
