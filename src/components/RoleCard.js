import {useRef, useState} from 'react';
import {
  TouchableOpacity,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import {interpolateColor} from 'react-native-reanimated';

const RoleCard = ({imageName, selectedOption, onSelect}) => {
  const [selected, setSelected] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const spinValue = useRef(new Animated.Value(0)).current;

  const startScaling = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };

  const startSpinning = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  };

  const handleValueSelect = () => {
    onSelect(imageName);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const renderCheckMark = () => {
    return (
      <View>
        <Text>Selected</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.box,
        backgroundColor: imageName == selectedOption ? '#52B69A' : '#F4F4F4',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          handleValueSelect();
          startSpinning();
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              ...styles.imageCircle,
              backgroundColor: imageName == 'Admin' ? '#EBBFFF' : '#91D8FF',
            }}>
            <Animated.Image
              source={
                imageName == 'Admin'
                  ? require('../assets/Admin.png')
                  : require('../assets/Doctor.png')
              }
              style={[styles.image, {transform: [{rotateY: spin}]}]}
              // style={[styles.image, { transform:[{scaleX:scaleValue},{scaleY:scaleValue}] }]}
            />
          </View>
          <View>
            <Text style={styles.roleText}>
              {' '}
              {imageName == 'Admin' ? 'Admin' : 'Doctor'}{' '}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {selected && <Text>Selected</Text>}
    </View>
  );
};

export default RoleCard;

const styles = StyleSheet.create({
  box: {
    width: 315,
    height: 280,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:2,
    // shadowOpacity:0
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    // borderRadius: 23,
  },
  imageCircle: {
    height: 125,
    width: 125,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  roleText: {
    marginTop: 10,
    fontSize:18,
    color: '#1F89DB',
    fontFamily: 'Quicksand-Bold',
  },
});
