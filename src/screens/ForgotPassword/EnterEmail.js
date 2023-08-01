import {Dimensions, ImageBackground, Text, View} from 'react-native';
import Input from '../../components/StyledInput';
import {useEffect, useRef, useState} from 'react';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import AuthFooterText from '../../components/AuthFooterText';

const {height, width} = Dimensions.get('screen');

const EnterEmail = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = value => {
    setEmail(email);
  };

  const handleBackClick = () => {};

  const handleSubmit = () =>{}
  const handleLoginPress = () =>{}


  return (
    <ImageBackground style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} imageStyle={{resizeMode:'contain'}} source={require('../../assets/SpiralLogin.png')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: width * 0.9,
          marginTop: 20,
        }}>
        <BackButton handleBackClick={handleBackClick} />
      </View>

      <View style={{flex: 16, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 24,
            color: '#35B3E9',
          }}>
          Forgot Password
        </Text>
        <View style={{marginVertical: 30}}>
          <Input
            placeholder={'Enter your e-mail'}
            label={'Email Address'}
            variable={'email'}
            value={email}
            onChangeValue={handleEmailChange}
          />
        </View>
        <Button label={'Submit'} handleButtonPress={handleSubmit}/>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
        <AuthFooterText handleLoginPress={handleLoginPress} />
      </View>
    </ImageBackground>
  );
};

export default EnterEmail;
