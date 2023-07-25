import {useEffect, useRef, useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import RoleCard from '../../components/RoleCard';

const Role = () => {
  const [option, setOption] = useState(null);
  const spinValueAdmin = useRef(new Animated.Value(0)).current;
  const spinValueDoctor = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(0.5)).current;

  const {width, height} = Dimensions.get('screen');

  const startSpinningAdmin = () => {
    // spinValue.setValue(0);
    // Animated.timing(spinValue, {
    //   toValue: 1,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };
  const startSpinningDoctor = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };

  // const spinAdmin = spinValue.interpolate({
  //     inputRange:[0,1],
  //     outputRange:['0deg','360deg']
  // })

  // const spinDoctor = spinValue.interpolate({
  //     inputRange:[0,1],
  //     outputRange:['0deg','360deg']
  // })

  const handleOptionSelect = value => {
    setOption(value);
  };

  return (
    <View style={{flex:1,width, justifyContent: 'space-evenly', alignItems:'center'}}>
    <ImageBackground
      source={require('../../assets/SplashBackground.png')}
      resizeMode="contain"
      imageStyle={{height:height * 0.5, width:width * 0.95}}
      />
      <Text style={styles.roleText}>I am a...</Text>
      <View
        style={{ flex:1,justifyContent: 'space-evenly', alignItems:'center'}}>
        <RoleCard
          imageName="Doctor"
          selectedOption={option}
          onSelect={handleOptionSelect}
        />
        <RoleCard
          imageName="Admin"
          selectedOption={option}
          onSelect={handleOptionSelect}
        />
      </View>
    </View>
  );
};
export default Role;

const styles = StyleSheet.create({

  roleText: {
   
    fontSize: 24,
    color: '#1F89DB',
    fontFamily: 'Quicksand-Bold',
  },
});
