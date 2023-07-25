import {Dimensions, ImageBackground, Text, View} from 'react-native';
import Input from '../../components/StyledInput';
import {useState} from 'react';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

const {height, width} = Dimensions.get('screen');

const EnterEmail = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = value => {
    setEmail(email);
  };

  const handleBackClick = () => {};

  const handleSubmit = () =>{}

  return (
    <ImageBackground style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} imageStyle={{resizeMode:'contain'}} source={require('../../assets/SpiralLogin.png')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: width * 0.9,
          marginVertical: 10,
        }}>
        <BackButton handleBackClick={handleBackClick} />
      </View>

      <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 24,
            color: '#35B3E9',
          }}>
          Forgot Password
        </Text>
        <View style={{marginVertical: 35}}>
          <Input
            placeholder={'Enter your e-mail'}
            label={'Email Address'}
            variable={'email'}
            value={email}
            onChangeValue={handleEmailChange}
          />
        </View>
        <Button lablel={'Submit'} handleButtonPress={handleSubmit}/>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 25}}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Text>Already have an Account? </Text>
          <Text style={{textDecorationLine:'underline',color:'#35B3E9', fontWeight:'500'}}>Login</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EnterEmail;
