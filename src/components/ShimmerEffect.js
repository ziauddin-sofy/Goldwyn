import React, { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerEffect = ({ style }) => {
  const shimmerTranslateX = new Animated.Value(-300);

  const startAnimation = () => {
    shimmerTranslateX.setValue(-300);
    Animated.loop(
      Animated.timing(shimmerTranslateX, {
        toValue: 300,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.2)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Animated.View
          style={[
            styles.shimmerMask,
            {
              transform: [{ translateX: shimmerTranslateX }],
            },
          ]}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'black',
    height: 100,
  },
  gradient: {
    flex: 1,
  },
  shimmerMask: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default ShimmerEffect;
