import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../../config';
import styles from './style';

interface TabBaritemprops {
  focused: any;
  ICON: any;
  label: string;
}

const TabBarItem = (props: TabBaritemprops) => {
  const {focused, ICON, label} = props;
  const width = Dimensions.get('screen').width;
  const translateValue = useRef(new Animated.Value(0)).current;
  const rotatevalue = useRef(new Animated.Value(0)).current;

  Animated.parallel([
    Animated.spring(translateValue, {
      toValue: 1,
      friction: 3,
      velocity: 10,
      useNativeDriver: true,
    }),
    Animated.timing(rotatevalue, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();

  const rotate = rotatevalue.interpolate({
    inputRange: [0, 100, 200],
    outputRange: ['0deg', '180deg', '360deg'],
  });
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, {flex: 1}]}>
        {/* <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              transform: [{scale: translateValue}, {rotate: rotate}],
            },
            {
              backgroundColor: focused ? COLORS.primary : undefined,
              borderRadius: 10,
            },
          ]}
        /> */}
        <Animated.View style={[styles.button, {width: width * 0.301},{
            transform:[{scale:translateValue}]
        }]}>
          <Image
            style={[
              styles.image,
            //   {tintColor: focused ? COLORS.light : COLORS.primary},
            ]}
            source={ICON}
          />
          {focused && (
            <Text numberOfLines={1} style={styles.textStyle}>
              {label}
            </Text>
          )}
        </Animated.View>
      </View>
    </View>
  );
};

export default TabBarItem;
