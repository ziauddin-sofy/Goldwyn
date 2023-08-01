import {useEffect, useState} from 'react';
import {Animated, Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SkeletonLoading from '../../components/SkeletonLoading';
import SaveSVG from '../../assets/Save.svg';
import NotificationSVG from '../../assets/Notification.svg';
import Svg, {SvgXml} from 'react-native-svg';
import {searchXml,micXml,clockXml,notificaitonXml,saveXml,HomeXml,MessageXml,JobsXml,SettingXml} from '../../assets/XmlSVG/xmlSvg'
import JobCard from '../../components/JobCard';

const {width, height} = Dimensions.get('screen');

const Home = () => {
  const slideValue = useState(new Animated.Value(width))[0];
  const [isLoading, setIsLoading] = useState(true);
  const [isFocused,setIsFocused] = useState(false)


  const data = [
    {
      title: 'Root Canal Therapy',
      subTitle: 'XYZ Dental Clinic',
      description: `The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`,
      daysAgo: '2 days ago',
      minRange: '$500',
      maxRange: '$700',
    },
    {
      title: 'Root Canal Therapy',
      subTitle: 'XYZ Dental Clinic',
      description: `The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`,
      daysAgo: '2 days ago',
      minRange: '$500',
      maxRange: '$700',
    },
    {
      title: 'Root Canal Therapy',
      subTitle: 'XYZ Dental Clinic',
      description: `The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`,
      daysAgo: '2 days ago',
      minRange: '$500',
      maxRange: '$700',
    },
    {
        title:'Root Canal Therapy',
        subTitle:'XYZ Dental Clinic',
        description:`The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`,
        daysAgo:'2 days ago',
        minRange:'$500',
        maxRange:'$700'
    },
    // {
    //     title:'Root Canal Therapy',
    //     subTitle:'XYZ Dental Clinic',
    //     description:`The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`,
    //     daysAgo:'2 days ago',
    //     minRange:'$500',
    //     maxRange:'$700'
    // },
    // {
    //     title:'Root Canal Therapy',
    //     subTitle:'XYZ Dental Clinic',
    //     description:`The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`,
    //     daysAgo:'2 days ago',
    //     minRange:'$500',
    //     maxRange:'$700'
    // },
  ];

  useEffect(() => {
    Animated.timing(slideValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center',position:'relative'},
        // {transform: [{translateX: slideValue}]},
      ]}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            flex: 3 / 6,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              backgroundColor: '#EBBFFF',
            }}>
            <Image
              source={require('../../assets/Doctor.png')}
              style={{resizeMode: 'contain', height: 60, width: 60}}
            />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style={{color: '#A8A8A8', fontSize: 14, fontWeight: '400'}}>
              Test User
            </Text>
            <Text style={{color: '#D4D4D4', fontSize: 14, fontWeight: '600'}}>
              General Dentist
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 3 / 6,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 3 / 6,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: '#F4F4F4',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml xml={saveXml} width="60%" height="60%" />
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                backgroundColor: '#F4F4F4',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml xml={notificaitonXml} width="60%" height="60%" />
            </View>
          </View>
        </View>
      </View>
      
      <View style={{flex:0.6, flexDirection:'row',alignItems:'center', borderRadius:80,backgroundColor: '#f4f4f4', height:10,width: width * 0.9,paddingLeft:6, paddingRight:6}}>
        <SvgXml xml={searchXml} height='20' width='20' />
      <TextInput
        value={''}
        placeholder={isFocused ? '' : 'Search'}
        placeholderTextColor={'#8F9098'}
        style={{
          // ...styles.input,
          width: width * 0.7,
          borderColor: isFocused ? '#35B3E9' : '#D2D2D2',
          padding: 10,
          backgroundColor: '#f4f4f4',
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => {
          // onChangeValue(e.nativeEvent.text, variable);
        }}
      />
      <SvgXml xml={micXml} height='20' width='20' />
      </View>

      <View style={{flex:0.8, flexDirection:'row',justifyContent:'space-between',  alignItems:'center'}}>
        <TouchableOpacity>
          <Text style={{textDecorationLine:'underline', color:'#1F89DB'}}>View on Map</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{textDecorationLine:'underline', color:'#1F89DB'}}>Recently Posted</Text>
        </TouchableOpacity>
        
      </View>

      <View style={{flex: 6}}>
        <ScrollView showsVerticalScrollIndicator={false}>

        
        {data.map((job, index) => {
          if (isLoading) {
            return (
              <View style={{marginBottom: 10}}>
                <SkeletonLoading index={index} />
              </View>
            );
          } else {
            return (
              // <View
              //   style={{
              //     elevation: 2,
              //     borderRadius: 10,
              //     width: width * 0.9,
              //     backgroundColor: '#35B4EA',
              //     marginBottom: 10,
              //   }}>
              //   <View
              //     style={{
              //       flexDirection: 'row',
              //       justifyContent: 'space-between',
              //       alignItems: 'center',
              //       padding: 8,
              //     }}>
              //     <View
              //       style={{
              //         flex: 1,
              //         flexDirection: 'row',
              //         justifyContent: 'space-between',
              //         alignItems: 'center',
              //       }}>
              //       <View
              //         style={{
              //           height: 50,
              //           width: 50,
              //           borderRadius: 40,
              //           backgroundColor: 'white',
              //           justifyContent: 'center',
              //           alignItems: 'center',
              //         }}>
              //         <Image
              //           source={require('../../assets/Tooth.png')}
              //           resizeMode="contain"
              //         />
              //       </View>

              //       <View
              //         style={{
              //           flexDirection: 'column',
              //           justifyContent: 'center',
              //           alignItems: 'flex-start',
              //           paddingLeft: 10,
              //         }}>
              //         <Text style={{color: 'white'}}>Root Canal Therapy</Text>
              //         <Text style={{color: 'white'}}>XYZ Dental Clinic</Text>
              //         <Text style={{color: 'white'}}>New Delhi (60 kms)</Text>
              //       </View>
              //     </View>

              //     <View style={{flex: 1, alignItems: 'flex-end'}}>
              //       <SvgXml xml={saveXml} width="30" height="30" />
              //     </View>
              //   </View>

              //   <View style={{alignItems: 'center'}}>
              //     <Text style={{color: 'white'}}>
              //     `The procedure involves removing infected pulp (soft tissue) from tooth's interior and disinfecting the root canals...`
              //     </Text>
              //   </View>

              //   <View
              //     style={{
              //       flexDirection: 'row',
              //       backgroundColor: 'white',
              //       justifyContent: 'space-between',
              //       borderBottomLeftRadius: 10,
              //       borderBottomRightRadius: 10,
              //       padding: 10,
              //     }}>
              //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
              //       <SvgXml xml={clockXml} height={'15'} width={'15'} />
              //       <Text style={{paddingLeft: 4}}>Posted 2 days ago</Text>
              //     </View>
              //     <View style={{flexDirection: 'row'}}>
              //       <Text style={{fontWeight: 'bold'}}>
              //         $400-$500
              //       </Text>
              //     </View>
              //   </View>
              // </View>
              <JobCard/>
            );
          }
        })}
        </ScrollView>
      </View>


        <View 
        style={{
          flexDirection:'row',
          zIndex:44, 
          position:'absolute',
          bottom:10,
          justifyContent:'space-around',
          borderWidth:1,
          borderRadius:10,
          alignItems:'center', 
          borderColor:'#35B4EA',
          width:width*0.9,
          height:60,
          backgroundColor: 'white',
          elevation:5
          }}>
            <TouchableOpacity style={{alignItems:'center'}}>
              <SvgXml xml={HomeXml} height={'25'} width={'25'}/>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
              <SvgXml xml={MessageXml} height={'25'} width={'25'}/>
              <Text>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
              <SvgXml xml={JobsXml} height={'25'} width={'25'}/>
              <Text>Jobs</Text>
              </TouchableOpacity>
            
            <TouchableOpacity style={{alignItems:'center'}}>
              <SvgXml xml={SettingXml} height={'25'} width={'25'}/>
              <Text>Setting</Text>
            </TouchableOpacity>
        </View>
        

      
    </View>
  );
};

export default Home;
