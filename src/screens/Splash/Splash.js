import {View, Image, StyleSheet, Animated} from 'react-native';
import {useEffect, useRef, useState} from 'react';

const Splash = () => {
  const opacity = useState(new Animated.Value(1))[0];
  const animatedCount = useRef(null)

  useEffect(() => {
    animateLogo.current = 1;
    animateLogo();
  }, []);

  const animateLogo = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(()=>{
        animateLogo.current = animateLogo.current+ 1;
        if(animateLogo.current < 3 )animateLogo()
      });
    });
  };

  return (
    <View style={{...styles.container}}>
      <Image source={require('../../assets/SplashBackground.png')} />
      <Animated.Image
        source={require('../../assets/Logo.png')}
        style={{...styles.logo, opacity}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    position: 'absolute',
    top: 300,
  },
});
