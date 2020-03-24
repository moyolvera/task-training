import React from 'react';
import { Button, Text, Item, Label, Input } from 'native-base';

import useAddTicket from './hooks/useAddTicket';
import styles from './AddTicket.styles';
import Layout from '../../components/Layout/Layout';

const AddTicket = () => {
  const { title, navigate } = useAddTicket();

  return (
    <Layout title={title}>
      <Item stackedLabel style={{ marginBottom: 20 }}>
        <Label>ID:</Label>
        <Input placeholder="Enter the ticket id" />
      </Item>
      <Item stackedLabel style={{ marginBottom: 20 }}>
        <Label>Estimate:</Label>
        <Input placeholder="In days" />
      </Item>
      <Item stackedLabel style={{ marginBottom: 20 }}>
        <Label>Reviewer:</Label>
        <Input placeholder="Who is checking your PRs" />
      </Item>
      <Button onPress={() => navigate('Home', { shouldReload: true })} style={styles.button}>
        <Text>Save ticket</Text>
      </Button>
    </Layout>
  );
};

export default AddTicket;
