import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Input from '../../components/StyledInput';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import {useState} from 'react';
import DynamicFormHOC from '../../components/DynamicFormHOC';

const JobPost = () => {
  const {width, height} = Dimensions.get('screen');
  const [selectedTime,setSelectedTime] = useState('')

  const [userDetails, setUserDetails] = useState({
    procedureTitle:'',
    procedureType:'',
    hospitalName:'',
    description:'',
    procedureTitle:'',
    budget:'',
    location:'',
    dateOfProcedure:'',
    timeOfProcedure:''
  });

  const handleDetails = (value, name) => {
    setUserDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClick = () => {};
  const onTimeChange = () => {};
  const handleBackClick = () => {};

  const fields = [
    {
      type: 'dropdown',
      label: 'Procedure Title',
      title:'Select Procedure Title',
      variable: 'procedureTitle',
      value: userDetails.procedureTitle,
      options: [
        {label: 'Sample Title One', value: 'Sample Title One'},
        {label: 'Sample Title Two', value: 'Sample Title Two'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      label: 'Procedure Type',
      title:'Select Procedure Type',
      variable: 'procedureType',
      value: userDetails.procedureType,
      options: [
        {label: 'Sample Type One', value: 'Sample Type One'},
        {label: 'Sample Type Two', value: 'Sample Type Two'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Enter Hospital/Clinic Name',
      label: 'Hospital/Clinic Name',
      variable: 'hospitalName',
      value: userDetails.hospitalName,
      onChangeValue: handleDetails,
    },
    {
      type: 'textArea',
      placeholder: 'Enter Job Description',
      label: 'Description',
      variable: 'description',
      value: userDetails.description,
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Enter Budget',
      label: 'Budget',
      variable: 'budget',
      value: userDetails.budget,
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder: 'Enter Location',
      label: 'Location',
      variable: 'location',
      value: userDetails.location,
      onChangeValue: handleDetails,
    },
    {
        type:'calendar',
        label:'Date of Procedure'
    },
    {
        type:'time',
        title:'Time of Procedure',
        label:'HH:MM',
        selectedTime:selectedTime,
        onTimeChange:onTimeChange
    },
    
   
  ];

  return (
    <ImageBackground source={require('../../assets/SpiralLogin.png')} imageStyle={{resizeMode:'contain'}}>
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
              Post
            </Text>
          </View>
        </View>

        <View>
          <DynamicFormHOC fields={fields} />
        </View>

        <View style={{marginTop:30}}>
          <Button label="Submit" handleButtonPress={handleSubmitClick} />          
        </View>
      </View>
    </ImageBackground>
    
  );
};

export default JobPost;

