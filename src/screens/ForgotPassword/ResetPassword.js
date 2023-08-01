import {Animated, Dimensions, ImageBackground, Text, View} from 'react-native';
import BackButton from '../../components/BackButton';
import Input from '../../components/StyledInput';
import {useState} from 'react';
import Password from '../../components/PasswordInput';
import Button from '../../components/Button';
import AuthFooterText from '../../components/AuthFooterText';

const {width, height} = Dimensions.get('screen');

const ResetPassword = () => {
  const slideValue = useState(new Animated.Value(width))[0];

  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  useState(() =>{
    Animated.timing(slideValue,{
        toValue:0,
        duration:400,
        useNativeDriver:true
    }).start()
  },[])

  const handleBackClick = () => {
    console.log('back pressed')
    Animated.timing(slideValue,{
        toValue:-width,
        duration:400,
        useNativeDriver:true
    }).start()
  };
  const handleButtonPress = () => {};

  const handlePasswordChange = (value, name) => {
    setPassword(prev => ({...prev, [name]: value}));
  };
  const handleLoginPress = () => {};

  return (
    <Animated.View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'},{transform:[{translateX:slideValue}]}]}>    
    <ImageBackground
      source={require('../../assets/SpiralLogin.png')}
      imageStyle={{resizeMode: 'contain'}}>
      <View style={{flex: 1, width: width * 0.85, marginTop: 20}}>
        <BackButton handleBackClick={handleBackClick} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 26,
            color: '#35B3E9',
          }}>
          Change Password
        </Text>
        <View style={{marginTop: 30, marginBottom: 2}}>
          <Password
            placeholder={'Enter new password'}
            label={'New Password'}
            variable={'newPassword'}
            value={password.newPassword}
            onChangeValue={handlePasswordChange}
          />
        </View>

        <Password
          placeholder={'Confirm password'}
          label={'Confirm Password'}
          variable={'confirmPassword'}
          value={password.confirmPassword}
          onChangeValue={handlePasswordChange}
        />
        <View style={{marginTop: 35}}>
          <Button
            label={'Change Password'}
            handleButtonPress={handleButtonPress}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
        <AuthFooterText handleLoginPress={handleLoginPress} />
      </View>
    </ImageBackground>
    </Animated.View>
  );
};

export default ResetPassword;
