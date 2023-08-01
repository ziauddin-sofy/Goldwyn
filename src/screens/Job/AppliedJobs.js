import { View,Text, Dimensions, Image } from "react-native";
import BackButton from "../../components/BackButton";
import { SvgXml } from "react-native-svg";
import { ArrowRight, clockXml } from "../../assets/XmlSVG/xmlSvg";
const {width, height} = Dimensions.get('screen')

const AppliedJobs = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <BackButton handleBackClick={() => {}} />
        </View>
        <View style={{flex: 14, alignItems: 'center'}}>
          <Text style={{color: '#1F89DB', fontSize: 16, fontWeight: '600'}}>
            Jobs
          </Text>
        </View>
      </View>
      <View style={{width:width*0.9,backgroundColor:'#F5F5F5',borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:6}}>
            <View style={{backgroundColor:'#35B4EA',borderRadius:10,width:width*0.40,alignItems:'center'}}>
                <Text style={{padding:10,color:'white',fontWeight:'600'}}>Applied</Text>
            </View>
            <View style={{backgroundColor:'#F5F5F5',borderRadius:10,width:width*0.40,alignItems:'center'}}>
                <Text style={{padding:10,fontWeight:'600'}}>Posted</Text>
            </View>
        </View>
      </View>
    
        <View style={{marginTop:25,paddingBottom:15,borderBottomWidth:1, borderBottomColor:'#D2D2D2'}}>    
        <View style={{flexDirection:'row',alignItems:'center',width:width*0.9,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:50,width:50,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../assets/Tooth.png')} resizeMode="contain" />
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start',paddingLeft:10}}>
                    <Text style={{fontWeight:'500',color:'black',fontSize:16}}>Root Canal Therapy</Text>
                    <Text>XYZ Clinic</Text>
                    <Text>New Delhi (60 kms)</Text>                
                </View>        
            </View>
            <View style={{backgroundColor:'#F5F5F5', height:30,width:30,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
                <SvgXml xml={ArrowRight} height={'20'} width={'20'}/>
            </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',paddingLeft:15}}>
            <SvgXml xml={clockXml} width={'15'} height={'15'} />
            <Text style={{padding:4,fontSize:12}}>Applied 2 days ago</Text>
        </View>
        </View>
        <View style={{marginTop:25,paddingBottom:15,borderBottomWidth:1, borderBottomColor:'#D2D2D2'}}>    
        <View style={{flexDirection:'row',alignItems:'center',width:width*0.9,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:50,width:50,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../assets/Tooth.png')} resizeMode="contain" />
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start',paddingLeft:10}}>
                    <Text style={{fontWeight:'500',color:'black',fontSize:16}}>Root Canal Therapy</Text>
                    <Text>XYZ Clinic</Text>
                    <Text>New Delhi (60 kms)</Text>                
                </View>        
            </View>
            <View style={{backgroundColor:'#F5F5F5', height:30,width:30,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
                <SvgXml xml={ArrowRight} height={'20'} width={'20'}/>
            </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',paddingLeft:15}}>
            <SvgXml xml={clockXml} width={'15'} height={'15'} />
            <Text style={{padding:4,fontSize:12}}>Applied 2 days ago</Text>
        </View>
        </View>
        <View style={{marginTop:25,paddingBottom:15,borderBottomWidth:1, borderBottomColor:'#D2D2D2'}}>    
        <View style={{flexDirection:'row',alignItems:'center',width:width*0.9,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{height:50,width:50,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../assets/Tooth.png')} resizeMode="contain" />
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start',paddingLeft:10}}>
                    <Text style={{fontWeight:'500',color:'black',fontSize:16}}>Root Canal Therapy</Text>
                    <Text>XYZ Clinic</Text>
                    <Text>New Delhi (60 kms)</Text>                
                </View>        
            </View>
            <View style={{backgroundColor:'#F5F5F5', height:30,width:30,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
                <SvgXml xml={ArrowRight} height={'20'} width={'20'}/>
            </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',paddingLeft:15}}>
            <SvgXml xml={clockXml} width={'15'} height={'15'} />
            <Text style={{padding:4,fontSize:12}}>Applied 2 days ago</Text>
        </View>
        </View>

    </View>
  );
};
export default AppliedJobs;
