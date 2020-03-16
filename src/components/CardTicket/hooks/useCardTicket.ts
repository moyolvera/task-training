import { useState } from 'react';

const useCardTicket = () => {
  const [name] = useState('This is a custom hook');

  return {
    name,
  };
};

export default useCardTicket;
