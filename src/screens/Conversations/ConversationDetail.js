import { Dimensions, Text, TextInput, TouchableOpacity, View,Keyboard, Image } from "react-native"
import BackButton from "../../components/BackButton"
import { SvgXml } from "react-native-svg"
import { AudioCall, ChatAttachment, ChatCamera, SendMessage, VideoCall } from "../../assets/XmlSVG/xmlSvg"
import { useState } from "react"
const {width,height} = Dimensions.get('screen')

const ConversationDetail = () =>{
    const [typedMessage,setTypedMessage] = useState('')
    const handleSendMessage = () =>{
        setTypedMessage('')
        Keyboard.dismiss()
    }
    return(
        <View style={{flex:1}}>
           <View style={{flexDirection:'row',padding:20,paddingBottom:15, alignItems:'center',borderBottomWidth:1,borderColor:'#d3d3d3'}}>
            <View style={{flex:1}}>
                <BackButton handleBackClick={() =>{}}/>
            </View>
            <View style={{flex:18, alignItems:'center'}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}> Sandra </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{paddingHorizontal:10}}>
                    <SvgXml xml={VideoCall} />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal:10}}>
                    <SvgXml xml={AudioCall} />
                </TouchableOpacity>
            </View>             
        </View>

            <View style={{flexDirection:'row',alignItems:'flex-end',marginVertical:10}}>
                <View style={{height:40,width:40}}>
                    <Image source={require('../../assets/ChatAvatar3.png')} resizeMode="contain" />
                </View>
                <View style={{backgroundColor:'#ECEBEB',marginHorizontal:10,borderRadius:20, borderBottomLeftRadius:0}}>
                    <Text style={{padding:15}}>
                        Dr. Test User has offered $550 for the job/procedure Root Canal Therapy
                    </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-around',marginVertical:8}}>
                        <TouchableOpacity style={{
                                backgroundColor: '#2BB829',
                                width: width * 0.35,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{color: 'white', padding: 8}}>Accept</Text>
                        </TouchableOpacity>
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
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'white',borderRadius:10}}>
                        <TextInput placeholder="Enter your Offer" />
                        <TouchableOpacity style={{
                                backgroundColor: '#35B3E9',
                                width: width * 0.30,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                            }}>
                                <Text>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:0,padding:10, borderTopWidth:1,borderColor:'#d3d3d3',paddingTop:10}}>
                <TouchableOpacity style={{paddingHorizontal:4}}>
                    <SvgXml xml={ChatAttachment} height={'27'} width={'27'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal:4}}>
                    <SvgXml xml={ChatCamera} height={'27'} width={'27'}/>
                </TouchableOpacity>
                <View >
                    <TextInput 
                    multiline={true}
                    value={typedMessage} 
                    placeholder="Type here..." 
                    style={{width:width*0.65,borderWidth:1,borderColor:'#ECEBEB',borderRadius:20,padding:10}}
                    onChangeText={(text) => setTypedMessage(text)}
                    />
                </View>
                
                <TouchableOpacity style={{paddingHorizontal:10}} onPress={handleSendMessage}>
                    <SvgXml xml={SendMessage} height={'27'} width={'27'}/>
                </TouchableOpacity>
            </View>      
        </View>
    )

}
export default ConversationDetail