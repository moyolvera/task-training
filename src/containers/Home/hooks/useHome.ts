import { useState } from 'react';

const useHome = () => {
  const [title] = useState('Home');

  return {
    title,
  };
};

export default useHome;
