import {useEffect, useRef, useState} from 'react';
import {View, Animated, Dimensions, Text,TouchableOpacity, Image, ScrollView} from 'react-native';
import BackButton from './BackButton';
const {width, height} = Dimensions.get('screen');
import { DotSvg,MailSvg,CallSvg,LocationSvg } from '../assets/XmlSVG/xmlSvg';
import { SvgXml } from 'react-native-svg';

const Profile = () => {
  const animValue = useRef(new Animated.Value(0)).current;
  const expLine = useRef(0)
  const eduLine = useRef(0)
  const experienceData = [
    'JNMCH, Aligarh',
    'AIMS, Delhi',
    'Personal Clinic',
  ];
  const educationData = [
    'Bachelor of Science in Computer Science',
    'Master of Science in Software Engineering',
  ];
  const [expLineHeight,setExpLineHeight] = useState(0)
  const [eduLineHeight,setEduLineHeight] = useState(0)

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    
  const specialization = ['Test Dental Clinic', 'Number 2 Dental Clinic', 'Number 3 Dental Clinic', 'Test Clinic']
const aboutMe = `Dedicated dentist with over ten years of experience in the dental field. Passionate about educating patients on the importance of oral hygiene. Committed to providing the best patient care through communication and high-quality service.`

  const EducationItem = (degree) => {
    return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <SvgXml xml={DotSvg} height={'18'} width={'18'}/>
          <View style={{paddingHorizontal:8}}>         
          <Text style={{fontSize:16, fontWeight:'400',}}>{degree}</Text>
          <Text style={{fontSize:12, fontWeight:'300',fontStyle:'italic'}}>Aligarh Muslim University,Aligarh (2012-16)</Text>
          </View>
        </View>        
    );
  };

  const onExpListLayout = (layout,index) =>{
    const {height} = layout
    if(index == 0){
      expLine.current = expLine.current + height + 10
    }
    else if(index < experienceData.length -1) {
      expLine.current = expLine.current + height+20
    }else{
      expLine.current = expLine.current + 10
      setExpLineHeight(expLine.current)
    }   
  }
  
  const onEduListLayout = (layout,index) =>{
    const {height} = layout
    if(index == 0){
      eduLine.current = eduLine.current + height + 10
    }
    else if(index < educationData.length -1) {
      eduLine.current = eduLine.current + height+20
    }else{
      eduLine.current = eduLine.current + 10
      setEduLineHeight(eduLine.current)
    }
  }
  
  return (
    <View style ={{flex:1,alignItems:'center'}}>
        <View style={{backgroundColor:'#F4F4F4', height:120, width:120, borderRadius:60,marginTop:20, elevation:1}}>
          <Image source={require('../assets/Doctor.png')} resizeMode='contain' />
        </View>
        <View style={{ paddingLeft:15,paddingTop:10,alignItems:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:16}}>Dr. Test User</Text>
          <Text style={{fontWeight:'600'}}>Dental Surgeon</Text>
        </View>
     <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
      {specialization.map((item,index) =>(
        <View key={index} style={{borderRadius:10, backgroundColor: getRandomColor(), margin:5}}>
          <Text style={{padding:5, color:'white'}}>{item}</Text>
        </View>
      ))}
     </View>
    <View style={{flex:1,flexDirection:'column',marginBottom:20, width:width *0.9}}>
      <ScrollView contentContainerStyle={{marginTop:30 }} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:'#f4f4f4',borderRadius:20, marginBottom:20}}>
          <Text style={{fontWeight:'bold', padding:15,paddingBottom:2, color:'black'}}>
            About Me
          </Text>
          <View style={{height:1,width:50,marginLeft:15,backgroundColor:getRandomColor()}}/>
          <Text style={{padding:20}}>{aboutMe}</Text>
        </View>

        <View style={{backgroundColor:'#f4f4f4',borderRadius:20, marginBottom:20}}>
          <Text style={{fontWeight:'bold', padding:15,paddingBottom:2, color:'black'}}>
            Experience
          </Text>
          <View style={{height:1,width:50,marginLeft:15,backgroundColor:getRandomColor()}}/>
          <View style={{flexDirection:'row'}}>
            <View style={{width:2,backgroundColor:'grey',height:expLineHeight, marginTop:23,marginBottom:10, position:'absolute', left:28}}/>
            <View >
            {
            experienceData.map((degree,index) =>(
              <View onLayout={({nativeEvent}) => onExpListLayout(nativeEvent.layout,index)} key={index} style={{ alignItems:'flex-start', marginVertical:10, marginLeft:20}}>
                {EducationItem(degree)}
              </View>
            ))
          }
            </View>        
          </View>        
        </View>
        <View style={{backgroundColor:'#f4f4f4',borderRadius:20, marginBottom:20}}>
          <Text style={{fontWeight:'bold', padding:15,paddingBottom:2, color:'black'}}>
            Education
          </Text>
          <View style={{height:1,width:50,marginLeft:15,backgroundColor:getRandomColor()}}/>
          <View style={{flexDirection:'row'}}>
            <View style={{width:2,backgroundColor:'grey',height:eduLineHeight, marginTop:23,marginBottom:10, position:'absolute', left:28}}/>
            <View >
            {
            educationData.map((degree,index) =>(
              <View onLayout={({nativeEvent}) => onEduListLayout(nativeEvent.layout,index)} key={index} style={{ alignItems:'flex-start', marginVertical:10, marginLeft:20}}>
                {EducationItem(degree)}
              </View>
            ))
          }
            </View>        
          </View>        
        </View>




        <View style={{backgroundColor:'#f4f4f4',borderRadius:20, marginBottom:20}}>
          <Text style={{fontWeight:'bold', padding:15,paddingBottom:2, color:'black'}}>
            Contact Here
          </Text>
          <View style={{height:1,width:50,marginLeft:15,backgroundColor:getRandomColor()}}/>

          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',paddingHorizontal:25,paddingVertical:10, alignItems:'center'}}>
              <SvgXml xml={CallSvg} />
              <Text style={{paddingLeft:20}}>8445571930</Text>
            </View>
          </View>        
          <View style={{flexDirection:'row',paddingHorizontal:25,paddingVertical:10, alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
              <SvgXml xml={MailSvg} />
              <Text style={{paddingLeft:20}}>contact@sofyrus.com</Text>
            </View>
          </View>        
          <View style={{flexDirection:'row',paddingHorizontal:25,paddingVertical:10,paddingBottom:20, alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
              <SvgXml xml={LocationSvg} />
              <View>
              <Text style={{paddingLeft:20}}>Manjur Gadhi Manjur Gadhi</Text>
              <Text style={{paddingLeft:20}}>Jamalpur,Aligarh</Text>
              <Text style={{paddingLeft:20}}>Uttar Pradesh,India</Text>
              </View>
              
            </View>
          </View>        
        </View>
        

        

        
      </ScrollView>
    </View>
    
    
     
     









    </View>
  );
};

export default Profile;
