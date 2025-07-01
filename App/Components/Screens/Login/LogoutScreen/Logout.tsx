import {ActivityIndicator} from 'react-native';
import React, {FC, useEffect} from 'react';
import { useData } from '../ChooseProject/useData';

const Logout: FC = ({ navigation }: any) => {
    const {logOut} = useData({navigation});
    useEffect(() => {
        logOut();
    }, []);
  return (
    <ActivityIndicator />
  );
};

export default Logout;