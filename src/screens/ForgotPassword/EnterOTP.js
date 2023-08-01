import {useEffect, useRef, useState} from 'react';
import BackButton from '../../components/BackButton';
import AuthFooterText from '../../components/AuthFooterText';

const {
  ImageBackground,
  View,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
} = require('react-native');

const {width, height} = Dimensions.get('screen');

const EnterOTP = () => {
  const inputRefs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
  };

  useEffect(() => {
    inputRefs.first.current.focus();
  }, []);

  const handleBackClick = () => {};
  const [otp, setOtp] = useState({
    first: {
      value: '',
      isFocused: false,
    },
    second: {
      value: '',
      isFocused: false,
    },
    third: {
      value: '',
      isFocused: false,
    },
    fourth: {
      value: '',
      isFocused: false,
    },
  });

  const handleFocussed = name => {
    let newOtp = {...otp};
    newOtp[name].isFocused = true;
    setOtp(newOtp);
  };
  const handleBlurred = name => {
    let newOtp = {...otp};
    newOtp[name].isFocused = false;
    setOtp(newOtp);
  };

  const handleKeyPress = (name, key) => {
    debugger;
    console.log(otp[name].value);
    debugger;
    if (otp[name].value == '' && key == 'Backspace') {
      let prevInput =
        name == 'fourth' ? 'third' : name == 'third' ? 'second' : 'first';
      inputRefs[prevInput].current.focus();
    }
  };

  const handleOtpChange = (text, name) => {
    let newOtp = {...otp};
    newOtp[name].value = text;
    setOtp(newOtp);
    if (text != '') {
      let nextInput =
        name == 'first' ? 'second' : name == 'second' ? 'third' : 'fourth';
      inputRefs[nextInput].current.focus();
    }
  };

  const handleLoginPress = () =>{}

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      source={require('../../assets/SpiralLogin.png')}
      imageStyle={{resizeMode: 'contain'}}>
      <View
        style={{
          flex: 1,
          width: width * 0.85,
          marginTop: 20,
        }}>
        <BackButton handleBackClick={handleBackClick} />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 26,
            color: '#35B3E9',
          }}>
          OTP Verification
        </Text>
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 14,
            marginVertical: 13,
            fontWeight: '400',
          }}>
          We have sent OTP to your email and phone number
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width * 0.85,
          }}>
          <TextInput
            keyboardType="number-pad"
            ref={inputRefs.first}
            value={otp.first.value}
            maxLength={1}
            onFocus={() => handleFocussed('first')}
            onBlur={() => handleBlurred('first')}
            onChangeText={text => handleOtpChange(text, 'first')}
            style={{
              ...styles.input,
              fontFamily: 'Quicksand-Bold',
              fontSize: 20,
              color: '#35B3E9',
              textAlign: 'center',
              backgroundColor: otp.first.isFocused
                ? 'rgba(31, 137, 219, 0.25)'
                : '#F3F3F3',
            }}
            onKeyPress={({nativeEvent}) =>
              handleKeyPress('first', nativeEvent.key)
            }
          />
          <TextInput
            keyboardType="number-pad"
            ref={inputRefs.second}
            value={otp.second.value}
            maxLength={1}
            onFocus={() => handleFocussed('second')}
            onBlur={() => handleBlurred('second')}
            onChangeText={text => handleOtpChange(text, 'second')}
            style={{
              ...styles.input,
              fontFamily: 'Quicksand-Bold',
              fontSize: 20,
              color: '#35B3E9',
              textAlign: 'center',
              backgroundColor: otp.second.isFocused
                ? 'rgba(31, 137, 219, 0.25)'
                : '#F3F3F3',
            }}
            onKeyPress={({nativeEvent}) =>
              handleKeyPress('second', nativeEvent.key)
            }
          />
          <TextInput
            keyboardType="number-pad"
            ref={inputRefs.third}
            value={otp.third.value}
            maxLength={1}
            onFocus={() => handleFocussed('third')}
            onBlur={() => handleBlurred('third')}
            onChangeText={text => handleOtpChange(text, 'third')}
            style={{
              ...styles.input,
              fontFamily: 'Quicksand-Bold',
              fontSize: 20,
              color: '#35B3E9',
              textAlign: 'center',
              backgroundColor: otp.third.isFocused
                ? 'rgba(31, 137, 219, 0.25)'
                : '#F3F3F3',
            }}
            onKeyPress={({nativeEvent}) =>
              handleKeyPress('third', nativeEvent.key)
            }
          />
          <TextInput
            keyboardType="number-pad"
            ref={inputRefs.fourth}
            value={otp.fourth.value}
            maxLength={1}
            onFocus={() => handleFocussed('fourth')}
            onBlur={() => handleBlurred('fourth')}
            onChangeText={text => handleOtpChange(text, 'fourth')}
            style={{
              ...styles.input,
              fontFamily: 'Quicksand-Bold',
              fontSize: 20,
              color: '#35B3E9',
              textAlign: 'center',
              backgroundColor: otp.fourth.isFocused
                ? 'rgba(31, 137, 219, 0.25)'
                : '#F3F3F3',
            }}
            onKeyPress={({nativeEvent}) =>
              handleKeyPress('fourth', nativeEvent.key)
            }
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom:30}}>
        <AuthFooterText handleLoginPress={handleLoginPress}/>
      </View>
    </ImageBackground>
  );
};

export default EnterOTP;

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 60,
    // backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 6,
  },
});
