import {BackHandler, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, FONTS, SIZES} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  firstContainer: {
    flex: 0.2,
    padding: SIZES.screenPadding,
  },
  secondContainer: {
    flex: 0.8,
    backgroundColor: COLORS.light,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userLogo: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  headerText: {
    color: COLORS.light,
    ...FONTS.h1,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  headerIcons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  headerRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  searchContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: COLORS.light,
  },
  searchIcons: {
    height: 20,
    width: 20,
    marginLeft: 10,
    alignSelf: 'center',
    tintColor: COLORS.grey,
    resizeMode: 'contain',
  },
});

export default styles;
