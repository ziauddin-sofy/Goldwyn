import {Dimensions, View, TouchableOpacity, Text} from 'react-native';
import Profile from '../../components/Profile';
import JobCard from '../../components/JobCard';
import BackButton from '../../components/BackButton';
const {width, height} = Dimensions.get('screen');

const CandidateDetail = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{flexDirection:'row',padding:20,paddingBottom:10, alignItems:'center'}}>
                <View style={{flex:1}}>
                <BackButton handleBackClick={() =>{}}/>
                </View>
                <View style={{flex:16, alignItems:'center'}}>
                    <Text style={{color:'#1F89DB',fontSize:16,fontWeight:'600'}}> Details </Text>
                </View>               
            </View>
      <View style={{justifyContent:'center',alignItems:'center',}}>
        <JobCard />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#DE1D1D',
            width: width * 0.35,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 4,
          }}>
          <Text style={{color: 'white', padding: 8}}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#2BB829',
            width: width * 0.35,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', padding: 8}}>Accept</Text>
        </TouchableOpacity>
      </View>
      <Profile />
    </View>
  );
};

export default CandidateDetail;
