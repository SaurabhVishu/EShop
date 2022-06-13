import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent: "center"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textStyle: {
    textAlignVertical: 'center',
    fontSize: 16,
    color: COLORS.dark,
    paddingTop: 5,
  },
});

export default styles;
