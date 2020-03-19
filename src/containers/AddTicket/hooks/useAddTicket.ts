import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

const useAddTicket = () => {
  const [title] = useState('Add Ticket');
  const { navigate } = useNavigation();

  return {
    title,
    navigate,
  };
};

export default useAddTicket;
