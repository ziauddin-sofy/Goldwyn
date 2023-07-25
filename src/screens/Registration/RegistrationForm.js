import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Input from '../../components/StyledInput';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import {useState} from 'react';
import DynamicFormHOC from '../../components/DynamicFormHOC';

const RegisterationForm = () => {
  const {width, height} = Dimensions.get('screen');

  const [userDetails, setUserDetails] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    Gender: '',
    profession: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleDetails = (value, name) => {
    setUserDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextClick = () => {};
  const handleBackClick = () => {};

  const fields = [
    {
      type: 'dropdown',
      label: 'Salutation',
      title:'Select Salutation',
      variable: 'salutation',
      value: userDetails.salutation,
      options: [
        {label: 'Mr', value: 'mr'},
        {label: 'Mrs', value: 'mrs'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Enter your first name',
      label: 'First Name',
      variable: 'firstName',
      value: userDetails.firstName,
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Enter your last name',
      label: 'Last Name',
      variable: 'lastName',
      value: userDetails.lastName,
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      label: 'Gender',
      title:'Select Gender',
      variable: 'gender',
      value: userDetails.Gender,
      options: [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'},
        {label: 'Other', value: 'other'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      label: 'Profession',
      title:'Select Profession',
      variable: 'profession',
      value: userDetails.profession,
      options: [
        {label: 'Teacher', value: 'teacher'},
        {label: 'Engineer', value: 'engineer'},
        {label: 'Doctor', value: 'Doctro'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Email Address',
      label: 'Email',
      variable: 'email',
      value: userDetails.email,
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Mobile Number',
      label: 'Mobile',
      variable: 'mobile',
      value: userDetails.mobile,
      onChangeValue: handleDetails,
    },
    {
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      variable: 'password',
      value: userDetails.password,
      onChangeValue: handleDetails,
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: width * 0.1,
          }}>
          <BackButton handleBackClick={handleBackClick} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: width * 0.8,
          }}>
          <Text
            style={{
              color: '#35B3E9',
              fontFamily: 'Quicksand-Bold',
              fontSize: 26,
              fontWeight: '400',
            }}>
            Signup
          </Text>
        </View>
      </View>

      <View>
        <DynamicFormHOC fields={fields} />
      </View>

      <View>
        <Button lablel="Next" handleButtonPress={handleNextClick} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={{color: 'grey'}}>Already have an Account?</Text>
          <Text style={{textDecorationLine: 'underline', color: '#35B3E9'}}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterationForm;

