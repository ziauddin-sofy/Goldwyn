import { useState } from 'react';
import BackButton from '../../components/BackButton';

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
  const handleBackClick = () => {};
  const [otp,setOtp] = useState({
    first:{
        value:'',
        isFocused:false
    },
    second:{
        value:'',
        isFocused:false
    },
    third:{
        value:'',
        isFocused:false
    },
    fourth:{
        value:'',
        isFocused:false
    },
  })

  const handleFocussed = (name) =>{
    let newOtp = {...otp}
    newOtp[name].isFocused = true
    setOtp(newOtp)
  }
  const handleBlurred = (name) =>{
    let newOtp = {...otp}
    newOtp[name].isFocused = false
    setOtp(newOtp)
  }
  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      source={require('../../assets/SpiralLogin.png')}
      imageStyle={{resizeMode: 'contain'}}>
      <View
        style={{
            flex:1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: width * 0.85,
          marginVertical: 10,
        }}>
        <BackButton handleBackClick={handleBackClick} />
      </View>
      <View style={{flex:10,alignItems: 'center', justifyContent: 'center'}}>
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
          value={otp.first.value} 
          onFocus={() => handleFocussed('first')}
          onBlur={() => handleBlurred('first')}
          onChangeText={() => {}}
           style={{...styles.input, backgroundColor: otp.first.isFocused? 'rgba(31, 137, 219, 0.25)':'#F3F3F3'}} 
           />
          <TextInput 
          value={otp.second.value} 
          onFocus={() => handleFocussed('second')}
          onBlur={() => handleBlurred('second')}
          onChangeText={() => {}} 
          style={{...styles.input, backgroundColor: otp.second.isFocused? 'rgba(31, 137, 219, 0.25)':'#F3F3F3'}} 
          />
          <TextInput 
          value={otp.third.value} 
          onFocus={() => handleFocussed('third')}
          onBlur={() => handleBlurred('third')}
          onChangeText={() => {}} 
          style={{...styles.input, backgroundColor: otp.third.isFocused? 'rgba(31, 137, 219, 0.25)':'#F3F3F3'}}
          />
          <TextInput 
          value={otp.fourth.value} 
          onFocus={() => handleFocussed('fourth')}
          onBlur={() => handleBlurred('fourth')}
           onChangeText={() => {}} 
          style={{...styles.input, backgroundColor: otp.fourth.isFocused? 'rgba(31, 137, 219, 0.25)':'#F3F3F3'}} 
          />
        </View>
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
