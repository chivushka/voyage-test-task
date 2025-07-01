import { useState } from 'react';

export const useLoginAlert = () => {
  const [isAlert, setIsAlert] = useState(false);
  const [alertData, setAlertData] = useState('');

  const showAlert = (message: string = 'Login failed') => {
    setAlertData(message);
    setIsAlert(true);
  };

  const hideAlert = () => {
    setIsAlert(false);
    setAlertData('');
  };

  return {
    isAlert,
    alertData,
    showAlert,
    hideAlert,
  };
}; 