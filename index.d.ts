import {ReactNode} from 'react';
import {TooltipProps as Props} from 'react-native-walkthrough-tooltip';

declare module 'react-native-walkthrough-tooltip' {
  export interface TooltipProps extends Props {
    children: ReactNode;
  }
}

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}
declare module '@env' {
  export const REACT_APP_BASEURL: string;
  export const REACT_APP_SSO_REDIRECT_CALLBACK_IOS: string;
  export const REACT_APP_SSO_REDIRECT_CALLBACK_ANDROID: string;
}
