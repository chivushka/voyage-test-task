/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Arrow from '../../../../Assets/images/svg/Arrow';
import TextC from '../../../Ui/TextComponent';
import {
  globalFontStyles,
  monoDisplay,
  monoLine,
} from '../../../../Assets/Styles/styles';
import PlaceholdLogo from '../../../../Assets/images/svg/PlaceholdLogo';


interface IProjectItem {
  title: string;
  linkto: (ref: any) => void;
  logoURL: string | null;
  logIntoText: string;
  subTitle: string
}

const ProjectItem: FC<IProjectItem> = ({ title, linkto, logoURL, logIntoText, subTitle }) => {
  return (
    <TouchableOpacity onPress={linkto}>
      <View style={styles.projectItem}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {logoURL ? (
            <Image
              style={{ width: 32, height: 32, borderRadius: 100 }}
              source={{
                uri: logoURL,
              }}
            />
          ) : (
            <PlaceholdLogo x={32} y={16} />
          )}

          <View style={{ marginLeft: 24 }}>
            <TextC styles={globalFontStyles.label}>{logIntoText}</TextC>
            <TextC
              styles={{
                ...globalFontStyles.monoBody,
                color: monoDisplay,
                fontWeight: 'bold',
              }}>
              {title}
            </TextC>
            <TextC
              styles={
                styles.companyName
              }>
              {subTitle}
            </TextC>
          </View>
        </View>
        <Arrow angle={0} width={9} height={16} />
      </View>
    </TouchableOpacity>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  projectItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: monoLine,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  companyName: {
    fontWeight: '500',
    color: '#BEBEBE',
    fontSize: 12,
    marginTop: 3
  },
});