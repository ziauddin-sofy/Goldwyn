import {View, Text, Dimensions, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {clockXml, saveXml} from '../assets/XmlSVG/xmlSvg';
const {width, height} = Dimensions.get('screen');
const JobCard = () => {
  return (
    <View
      style={{
        elevation: 2,
        borderRadius: 10,
        width: width * 0.9,
        backgroundColor: '#35B4EA',
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 8,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/Tooth.png')}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 10,
            }}>
            <Text style={{color: 'white'}}>Root Canal Therapy</Text>
            <Text style={{color: 'white'}}>XYZ Dental Clinic</Text>
            <Text style={{color: 'white'}}>New Delhi (60 kms)</Text>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <SvgXml xml={saveXml} width="30" height="30" />
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'white'}}>
          `The procedure involves removing infected pulp (soft tissue) from
          tooth's interior and disinfecting the root canals...`
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SvgXml xml={clockXml} height={'15'} width={'15'} />
          <Text style={{paddingLeft: 4}}>Posted 2 days ago</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>$400-$500</Text>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
