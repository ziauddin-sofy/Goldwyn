import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../components/BackButton";
import { SvgXml } from "react-native-svg";
import { ArrowRight, Logout } from "../../assets/XmlSVG/xmlSvg";
const {width,height} = Dimensions.get('screen')

const Setting = () =>{
    return(
        <View style={{flex:1, backgroundColor:'white',alignItems:'center'}}>
            <View style={{flexDirection:'row',padding:20, alignItems:'center'}}>
                <View style={{flex:1}}>
                <BackButton handleBackClick={() =>{}}/>
                </View>
                <View style={{flex:14, alignItems:'center'}}>
                    <Text style={{color:'#1F89DB',fontSize:16,fontWeight:'600'}}> Settings </Text>
                </View>               
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',paddingHorizontal:10, width:width * 0.9, backgroundColor:'#F5F5F5', borderRadius:10, marginVertical:10}}>
                    <Text style={{padding:15,fontWeight:'bold',color:'black'}}>History</Text>
                    <SvgXml xml={ArrowRight} height={'22'} width={'22'} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',paddingHorizontal:10,width:width * 0.9, backgroundColor:'#F5F5F5', borderRadius:10, marginVertical:10}}>
                    <Text style={{padding:15,fontWeight:'bold',color:'black'}}>Payment Details</Text>
                    <SvgXml xml={ArrowRight} height={'22'} width={'22'} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',paddingHorizontal:10,width:width * 0.9, backgroundColor:'#F5F5F5', borderRadius:10, marginVertical:10}}>
                    <Text style={{padding:15,fontWeight:'bold',color:'black'}}>Change Password</Text>
                    <SvgXml xml={ArrowRight} height={'22'} width={'22'} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',paddingHorizontal:10,width:width * 0.9, backgroundColor:'#F5F5F5', borderRadius:10, marginVertical:10}}>
                    <Text style={{padding:15,fontWeight:'bold',color:'black'}}>Edit Profile</Text>
                    <SvgXml xml={ArrowRight} height={'22'} width={'22'} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',paddingHorizontal:10,width:width * 0.9, backgroundColor:'#F5F5F5', borderRadius:10, marginVertical:10}}>
                    <Text style={{padding:15,fontWeight:'bold',color:'black'}}>FAQ's</Text>
                    <SvgXml xml={ArrowRight} height={'22'} width={'22'} />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',paddingHorizontal:10,width:width * 0.9, backgroundColor:'#F5F5F5', borderRadius:10, marginVertical:10}}>
                    <Text style={{padding:15,fontWeight:'bold',color:'black'}}>Contact Us</Text>
                    <SvgXml xml={ArrowRight} height={'22'} width={'22'} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style ={{flexDirection:'row',justifyContent:'center',alignItems:'center',position:'absolute',bottom:0,marginBottom:15,width:width*0.9, backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#35B3E9'}}>
                <SvgXml xml={Logout} height={'20'} width={'20'} />
                <Text style={{color:'#35B3E9',padding:20,paddingLeft:10,fontWeight:'500'}}>Log Out</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Setting;