import {useEffect, useState} from 'react';
import {Animated, Dimensions, Easing, View} from 'react-native';

const SkeletonLoading = () => {
  const pulseValue = useState(new Animated.Value(0))[0];
  const {width, height} = Dimensions.get('screen');

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(pulseValue, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
      ]),
    ).start();

    //stop animation when component unmounts
    return () => {
      pulseValue.stopAnimation();
    };
  }, []);

  const opacityRange = pulseValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.5],
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        height: 170,
        width: width * 0.85,
        borderRadius: 8,
        elevation: 1,
        backgroundColor: '#f4f4f4',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width:width*0.85
        }}>
        <View>
          <Animated.View
            style={[
              {
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: 'black',
              },
              {opacity: opacityRange},
            ]}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <View style={{marginBottom: 6}}>
            <Animated.View
              style={[
                {height: 20, width: 150, backgroundColor: 'black'},
                {opacity: opacityRange},
              ]}
            />
          </View>

          <View style={{marginBottom: 6}}>
            <Animated.View
              style={[
                {height: 20, width: 100, backgroundColor: 'black'},
                {opacity: opacityRange},
              ]}
            />
          </View>

          <View>
            <Animated.View
              style={[
                {height: 20, width: 130, backgroundColor: 'black'},
                {opacity: opacityRange},
              ]}
            />
          </View>
        </View>
      </View>

      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {height: 30, width: width * 0.7, backgroundColor: 'black'},
            {opacity: opacityRange},
          ]}
        />
        <View style ={{marginTop:6}}>
        <Animated.View
          style={[
            {height: 20, width: width * 0.7, backgroundColor: 'black'},
            {opacity: opacityRange},
          ]}
        />
        </View>
        
      </View>
    </View>
  );
};

export default SkeletonLoading;
