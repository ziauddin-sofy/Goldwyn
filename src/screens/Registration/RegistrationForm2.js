import {Dimensions, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import Input from '../../components/StyledInput';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import {useState} from 'react';
import DynamicFormHOC from '../../components/DynamicFormHOC';
import { SvgXml } from 'react-native-svg';
import { EditXml, UploadAadhar, UserXml } from '../../assets/XmlSVG/xmlSvg';

const RegisterationFormTwo = () => {
  const {width, height} = Dimensions.get('screen');
  const [profilePicture,setProfilePicture] = useState('')
  const [userDetails, setUserDetails] = useState({
    dob: '',
    workCity: '',
    profession: '',
    aadharNumber: '',
    aadharBack: '',
    aadharFront: '',
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
      type: 'calendar',
      label: 'Date of Birth',
      title:'Select Date of Birth',
      variable: 'dob',
      value: userDetails.dob,      
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      placeholder: 'Select your work city',
      label: 'Work City',
      variable: 'workCity',
      value: userDetails.workCity,
      options:[
        {label:'New York',value:'New York'},
        {label:'London',value:'London'},
        {label:'New Delhi',value:'New Delhi'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'dropdown',
      placeholder: 'Select your profession',
      label: 'Profession',
      variable: 'profession',
      value: userDetails.profession,
      options:[
        {label:'Profession One',value:'Profession One'},
        {label:'Profession Two',value:'Profession Two'},
        {label:'Profession Three',value:'Profession Three'},
      ],
      onChangeValue: handleDetails,
    },
    {
      type: 'input',
      placeholder:'Enter your Aadhar Number',
      label: 'Aadhar Number',
      title:'Enter your Aadhar Number',
      variable: 'aadharNumber',
      value: userDetails.aadharNumber,      
      onChangeValue: handleDetails,
    },    
  ];

  return (
    <View
      style={{
        // flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'relative',
        backgroundColor:'white'

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

        {/* Upload profile picture */}
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{padding:10}}>Upload Profile Picture</Text>
        { profilePicture ? (
                <View style={{height:60,width:60,borderRadius:60}}>
                    <Image source={require('../../assets/Doctor.png')} resizeMode='contain' />
                </View>
            ): (
            <View style={{position:'relative',height:100,width:100,borderRadius:80,borderWidth:2,borderColor:'#D7D7D7',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <SvgXml xml={UserXml} height={'40'} width={'40'}/>
                <TouchableOpacity style={{position:'absolute', left:70,top:50,backgroundColor:'#5FD3FF',height:50,width:50,borderRadius:40,justifyContent:'center',alignItems:'center'}}>
                <SvgXml xml={EditXml} height={'30'} width={'30'}/>
                </TouchableOpacity>
            </View>)
            } 
      </View>
      
      {/* Input Fields */}
      <View style={{marginVertical:15}}>
            <DynamicFormHOC fields={fields} />
            {/* Upload Aadhar Card Image */}
            <View style={{marginVertical:10}}>
            <Text style={{}}>Upload Aadhar Card Image</Text>
            <Text style={{fontSize:10}}>PNG, JPG or PDF (Max 800x400 px)</Text>
            </View>
            
            <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{height:100, width:150,borderWidth:1,borderRadius:10,borderStyle:'dashed',borderColor:'#E0E0E0',justifyContent:'center',alignItems:'center',}}>
                  <View style={{alignItems:'center'}}>
                  <SvgXml xml={UploadAadhar} />
                  <Text style={{color:'#5FD3FF',padding:2}}>Click to Upload</Text>
                  </View>                
                </TouchableOpacity>
                <Text>
                  Front
                </Text>
              </View>
              
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{height:100, width:150,borderWidth:1,borderRadius:10,borderStyle:'dashed', borderColor:'#E0E0E0',justifyContent:'center',alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
              <SvgXml xml={UploadAadhar} />
                <Text style={{color:'#5FD3FF',padding:2}}>Click to Upload</Text>
              </View>              
              </TouchableOpacity>
              <Text>Back</Text>
            </View>              
            </View>
      </View>

      <View style={{marginTop:20}}>            
        <Button label="Next" handleButtonPress={handleNextClick} />       
      </View>
    </View>
  );
};

export default RegisterationFormTwo;

