import { Modal, StyleSheet, View, ViewStyle, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import TextC from './TextComponent';
import {
  globalFontStyles,
  monoBG,
  monoInput,
  primaryColor,
} from '../../Assets/Styles/styles';
import Button from './Button';
import Plus from '../../Assets/images/svg/Plus';

interface IAlert {
  title: string;
  handleClick?: () => void;
  isAlert: boolean;
  setIsAlert: any;
  navToForgotPass?: any;
}

const AlertC: FC<IAlert> = ({title, setIsAlert, isAlert, navToForgotPass}) => {

  const navigateToForgetPass = () =>{
    setIsAlert(false);
    navToForgotPass();
  }

  return (
    <Modal
    animationType="slide"
    transparent={false}
    visible={isAlert}
    onRequestClose={() => {
      setIsAlert(!isAlert);
    }}>
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          height: '85%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '15%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: monoInput,
              borderRadius: 100,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [
                {
                  rotate: `45 deg`,
                },
              ],
            }}>
            <Plus color={primaryColor} />
          </View>
          <TextC
            styles={{
              ...globalFontStyles.monoLabel,
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '5%',
            }}>
              {title === 'Auth_err_email_not_found' ? 
              "An account with this email address does not exist or is inactive Please contact the project adminstrator to request an invite in order to sign up" : 
              "The email address or password provided, might be incorrect"}
            </TextC>
            {title === 'Auth_err_no_active_account' ? 
                <TouchableOpacity onPress={navigateToForgetPass}>
                  <TextC
                    styles={{
                      ...globalFontStyles.monoLabel,
                      ...styles.bottomLabel,
                    }}>
                    Forgot Password?
                 </TextC>
              </TouchableOpacity>: <></>}
          </View>
        </View>
        <Button
          title={'Try Again'}
          disabled={false}
          handleClick={() => setIsAlert(false)}
          propStyles={{}}
        />
      </View>
    </Modal>
  );
};

export default AlertC;

const styles = StyleSheet.create({
  alert: {
    padding: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: '50%',
    left: '5%',
    width: '100%',
    backgroundColor: monoBG,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: primaryColor,
    zIndex: 10,
  },
  textContainer: {
    width: '100%',
  },
  iconContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  bottomLabel: {
    fontWeight: 'bold',
    color: primaryColor,
  },
});
