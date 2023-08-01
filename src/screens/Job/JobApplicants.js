import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import BackButton from '../../components/BackButton';
import {SvgXml} from 'react-native-svg';
import {ArrowRight, MapPointer} from '../../assets/XmlSVG/xmlSvg';
const {width,height} = Dimensions.get('screen')

const JobApplicants = () => {
    const applicants = [
        {
            name:'Dr. Test User',
            speciality:'Dental Specialist',
            location:'New Delhi',
            job:'Root Canal Therapy',
            amount: '$500',
            status:'pending'
        },
        {
            name:'Dr. Test User',
            speciality:'Dental Specialist',
            location:'New Delhi',
            job:'Root Canal Therapy',
            amount: '$500',
            status:"accepted"
        },
        {
            name:'Dr. Test User',
            speciality:'Dental Specialist',
            location:'New Delhi',
            job:'Root Canal Therapy',
            amount: '$500',
            status:"rejected"
        },
        
    ]
  return (
    <View style={{backgroundColor:'white', alignItems:'center'}}>
      <View style={{position: 'relative'}}>
        <View style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
          <Image source={require('../../assets/map.png')} />
        </View>
        <View style={{position: 'absolute', top: 20, left: 20}}>
          <BackButton handleBackClick={() => {}} />
        </View>
        <View style={{position: 'absolute', left: 140, top: 80}}>
          <SvgXml xml={MapPointer} height={'20'} width={'20'} />
        </View>
        <View style={{position: 'absolute', left: 160, top: 20}}>
          <SvgXml xml={MapPointer} height={'20'} width={'20'} />
        </View>
        <View style={{position: 'absolute', left: 250, top: 80}}>
          <SvgXml xml={MapPointer} height={'20'} width={'20'} />
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',marginVertical:15}}>
        <Text style={{color:'#1F89DB',fontSize:16,fontWeight:'500'}}>Applicants</Text>
      </View>


      {applicants.length && applicants.map((item,index) => (
      <View key={index} style={{borderBottomWidth:1,borderColor:'#D2D2D2',width:width*0.9, padding:10,paddingBottom:15,marginHorizontal:4,marginTop:15}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
                <View style={{height:60,width:60,borderRadius:40,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../assets/AppliedDoctor.png')} resizeMode='contain' />
                </View>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontWeight:'600',fontSize:16,color:'black'}}>Dr. Test User</Text>
                    <Text style={{fontSize:14}}>Dental Surgeon</Text>
                    <Text style={{fontSize:12}}>New Delhi</Text>
                </View>
            </View>
            <View style={{height:25, width:25, borderRadius:40,backgroundColor:'#F5F5F5',justifyContent:"center", alignItems:'center'}}>
                <SvgXml xml={ArrowRight} height={'15'} width={'15'} />
            </View>          
        </View>
        <View style={{flexDirection:'row',paddingLeft:10,marginTop:8,alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flex:1.2}} >
                <Text>Applied For: Root Canal..</Text>
                <Text style={{fontWeight:'600',color:'black'}}>Amount Proposed: $500</Text>
            </View>
            {item.status == 'pending'? (<View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{backgroundColor:'#DE1D1D',width:80,borderRadius:10,alignItems:'center', justifyContent:'center',marginRight:4}}>
                    <Text style={{color:'white',padding:8}}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#2BB829',width:80,borderRadius:10,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{color:'white',padding:8}}>Accept</Text>
                </TouchableOpacity>
            </View>)
            :item.status == 'accepted'?(
                <Text style={{fontWeight:'600',color:'#2BB829'}}>Accepted</Text>
            ):(
                <Text style={{fontWeight:'600',color:'#DE1D1D'}}>Rejected</Text>
            )
            }
        </View>
      </View>))}




    </View>
  );
};

export default JobApplicants;
