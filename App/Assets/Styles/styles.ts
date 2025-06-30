import {StyleSheet} from 'react-native';

export const primaryColor: string = '#0B907B';
export const primaryBG: string = '#E9FEFB';
export const successBG: string = '#EAF9DE';
export const primaryLight: string = '#B8FBF0';
export const primaryDark: string = 'rgba(8, 94, 80, 1)';

export const monoColor: string = '#A0AEBD';
export const monoLabel: string = '#576473';
export const monoBlack: string = '#141F2B';
export const monoBody: string = '#3F4B57';
export const monoPlacehold: string = '#A0AEBD';
export const monoBG: string = '#F7F9FC';
export const monoLine: string = '#DBE2E9';
export const monoInput: string = '#EFF3F6';
export const monoDisplay: string = '#232D38';
export const monoOffBlack: string = '#141F2B';

export const defaultDanger: string = '#CA2867';
export const dangerDark: string = '#960035';
export const dangerBG: string = '#FFECFC';
export const defaultSwitch: string = '#EBF0EF';

export const warningLight: string = '#FFF8E9';
export const warningDark: string = '#9C6800';

export const secondaryDark: string = '#004996';
export const secondaryBG: string = '#E3F1FF';

export const defaultPadding: number = 20;

export const globalFontStyles = StyleSheet.create({
  interText: {
    // fontFamily: 'Inter',
  },
  h1: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 32,
    color: monoBlack,
  },
  monoBody: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    color: monoBody,
  },
  monoLabel: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    color: monoLabel,
  },
  monoPlacehold: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    color: monoPlacehold,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 18,
    color: monoBody,
    letterSpacing: 1,
  },
  pictureH1: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: 'white',
    letterSpacing: 0.5,
  },
  monoDisplay: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
    color: monoDisplay,
  },
});
export const globalStyles = StyleSheet.create({});
