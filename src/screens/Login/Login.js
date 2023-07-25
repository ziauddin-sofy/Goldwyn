import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../components/StyledInput';
import Button from '../../components/Button';

const Login = () => {
  const {width, height} = Dimensions.get('screen');
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [showLoader, setShowLoader] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (showAnimation) startLoading();
  }, [showAnimation]);

  const startLoading = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      if (showAnimation) {
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          if (showAnimation) {
            startLoading();
          }
        });
      }
    });
  };

  const simulateApiCall = () => {
    setShowLoader(true);
    setShowAnimation(true);
    setTimeout(() => {
      const apiResponse = true;
      if (apiResponse) {
        setShowAnimation(false);
        setShowLoader(false);
      } else {
        setShowAnimation(false);
      }
    }, 10000);
  };

  return (
    // <KeyboardAvoidingView>
    <ImageBackground
      source={require('../../assets/SpiralLogin.png')}
      resizeMode="contain"
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          style={{
            width: width * 0.9,
            height: height * 0.18,
            position: 'relative',
          }}
          imageStyle={{
            resizeMode: 'contain',
          }}
          source={require('../../assets/LoginRectangle.png')}>
          <Image
            source={require('../../assets/DoctorIcon.png')}
            style={{position: 'absolute', bottom: 0, left: 15}}
          />
          <Image
            source={require('../../assets/LoginLogo.png')}
            style={{position: 'absolute', top: 20, right: 25}}
          />
        </ImageBackground>

        <View
          style={{
            marginTop: 40,
          }}>
          <View style={styles.inputBox}>
            <Input
              placeholder={'Enter Email'}
              label={'Email'}
              value={email}
              onChangeValue={setEmail}
            />
            <Input
              placeholder={'Enter Password'}
              label={'Password'}
              value={password}
              onChangeValue={setPassword}
            />
          </View>

          <View style={{flexDirection: 'row-reverse', marginBottom: 30}}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontFamily: 'Poppins-Regular',
                fontWeight: '400',
                color: '#35B5EA',
              }}>
              Forgot Password?
            </Text>
          </View>

          <View>
            {!showLoader ? (
              <Button lablel={'Login'} handleButtonPress={simulateApiCall} />
            ) : (
              <Animated.View
                style={[
                  {...styles.loaderStyle, width: width * 0.85},
                  {transform: [{scaleX: scaleValue}]},
                ]}
              />
            )}
          </View>

          <View style={{marginTop: 40}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: width * 0.2,
                  backgroundColor: '#D2D2D2',
                  height: 1,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                OR
              </Text>
              <View
                style={{
                  width: width * 0.2,
                  backgroundColor: '#D2D2D2',
                  height: 1,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 14,
              }}>
              <View
                style={{
                  backgroundColor: '#EFEFEF',
                  borderRadius: 40,
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 4,
                }}>
                <Image
                  source={require('../../assets/google.png')}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  backgroundColor: '#EFEFEF',
                  borderRadius: 40,
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 4,
                }}>
                <Image
                  source={require('../../assets/apple.png')}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text>Don't have an Account?</Text>
        </View>
        <View>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              color: '#35B5EA',
            }}>
            Register
          </Text>
        </View>
      </View>
    </ImageBackground>
    // </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  loaderStyle: {
    height: 5,
    backgroundColor: '#35B3E9',
    borderRadius: 8,
  },
  inputBox: {
    justifyContent: 'center',
  },
});
