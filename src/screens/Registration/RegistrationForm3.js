import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Input from '../../components/StyledInput';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import {useState} from 'react';
import DynamicFormHOC from '../../components/DynamicFormHOC';
import { SvgXml } from 'react-native-svg';
import { EditXml, UploadAadhar, UserXml } from '../../assets/XmlSVG/xmlSvg';

const RegisterationFormThree = () => {
  const {width, height} = Dimensions.get('screen');
  const [profilePicture,setProfilePicture] = useState('')
  const [userDetails, setUserDetails] = useState({
    dateOfRegistration: '',
    validityOfRegistration: '',
    workCity: '',
    profession: '',
    aadharNumber: '',
    aadharBack: '',
    aadharFront: '',
    stateOfRegistration:'',
    currentSpecialization:'',
    totalExperience:'',
    registrationNumber:'',
    lifetimeValidity:false,
  });

  const handleDetails = (value, name) => {
    setUserDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClick = () => {};
  const handleBackClick = () => {};
  const handleImageUpload = () => {};
  const handleCheckboxChange = () => {};

  const fields = [
    {
        type: 'dropdown',
        title: 'Select Highest Qualification',
        label: 'Highest Qualification',
        variable: 'highestQualification',
        value: userDetails.highestQualification,
        options:[
          {label:'Highest Qualification One',value:'Highest Qualification One'},
          {label:'Highest Qualification Two',value:'Highest Qualification Two'},
          {label:'Highest Qualification Three',value:'Highest Qualification Three'},
        ],
        onChangeValue: handleDetails,
      },
      {
        type:'image',
        label:'Upload Highest Qualification Certificate',
        handleImageUpload: handleImageUpload
      },
    {
        type: 'input',
        placeholder: 'Enter Registration Number',
        label: 'Registration Number',
        variable: 'registrationNumber',
        value: userDetails.registrationNumber,        
        onChangeValue: handleDetails,
      },
      {
        type:'image',
        label:'Upload Highest Qualification Certificate',
        handleImageUpload: handleImageUpload
      },
    {
      type: 'calendar',
      label: 'Date of Registration',
      title:'Select Date of Registration',
      variable: 'dateOfRegistration',
      value: userDetails.dateOfRegistration,      
      onChangeValue: handleDetails,
    },
    {
      type: 'calendar',
      label: 'Validity of Registration',
      title:'Select Validity of Registration',
      variable: 'validityOfRegistration',
      value: userDetails.validityOfRegistration,      
      onChangeValue: handleDetails,
    },
    {
      type: 'checkbox',
      label: 'Lifetime validity date allocation',
      variable: 'lifetimeValidity',
      value: userDetails.lifetimeValidity,      
      onChangeValue: handleCheckboxChange,
    },
    {
      type: 'dropdown',
      title: 'Select State of Registration',
      label: 'State of Registration',
      variable: 'stateOfRegistration',
      value: userDetails.stateOfRegistration,
      options:[
        {label:'New York',value:'New York'},
        {label:'London',value:'London'},
        {label:'New Delhi',value:'New Delhi'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      title: 'Select your Current Specialization',
      label: 'Current Specialization',
      variable: 'currentSpecialization',
      value: userDetails.currentSpecialization,
      options:[
        {label:'Specialization One',value:'Specialization One'},
        {label:'Specialization Two',value:'Specialization Two'},
        {label:'Specialization Three',value:'Specialization Three'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      title: 'Select your Total Experience',
      label: 'Total Experience',
      variable: 'totalExperience',
      value: userDetails.totalExperience,
      options:[
        {label:'2 years',value:'2 years'},
        {label:'2+ years',value:'2+ years'},
        {label:'5 years',value:'5 years'},
        {label:'5+ years',value:'5+ years'},
        {label:'10+ years',value:'10+ years'},
      ],
      onChangeValue: handleDetails,
    },
       
  ];

  return (
    <ImageBackground style={{flex:1,}} source={require('../../assets/SpiralLogin.png')} imageStyle={{resizeMode:'contain'}}>    
    <View
      style={{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'relative',
        // backgroundColor:'white'

      }}>
        {/* Signup back button */}
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

      
      
      {/* Input Fields */}
        <ScrollView showsVerticalScrollIndicator={false}>
        <DynamicFormHOC fields={fields} /> 
        </ScrollView>                     
           

      <View style={{marginBottom:15}}>            
        <Button label="Submit" handleButtonPress={handleSubmitClick} />       
      </View>
    </View>
    </ImageBackground>
  );
};

export default RegisterationFormThree;

