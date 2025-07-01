import {ActivityIndicator} from 'react-native';
import React, {FC, useEffect} from 'react';
import { useAuth } from '../../../../Library/Hooks/useAuth';

const Logout: FC = ({ navigation }: any) => {
    const {logout} = useAuth();
    useEffect(() => {
        logout();
    }, []);
  return (
    <ActivityIndicator />
  );
};

export default Logout;