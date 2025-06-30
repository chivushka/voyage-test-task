import {StyleSheet} from 'react-native';
import {monoLine, primaryBG} from '../../../Assets/Styles/styles';

export const styles = StyleSheet.create({
  wrapper: {},
  field: {
    borderColor: monoLine,
    borderWidth: 1,
    borderRadius: 6,

    paddingHorizontal: 20,
    paddingVertical: 3,

    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  options: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,

    backgroundColor: '#fff',

    maxHeight: 240,

    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,

    borderColor: monoLine,
    borderWidth: 1,
  },

  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },
});
