import { View, Text, Dimensions, TextInput, Image, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import { SvgXml } from "react-native-svg";
import { searchXml } from "../../assets/XmlSVG/xmlSvg";
import { useState } from "react";
const {width,height} = Dimensions.get('screen')

const Conversation = () =>{
    const [chatList,setChatList] = useState([
        {
            name:'Dr. Daniel Atkins',
            message:'The weather will pe perfect for the surgery',
            time:'2:14 PM',
            avatar:'../../assets/ChatAvatar1.png',
            newMessage:'1'
        },
        {
            name:'Dr. Matthew',
            message:'The weather will pe perfect for the surgery',
            time:'2:14 PM',
            avatar:'../../assets/ChatAvatar2.png',
            newMessage:'3'
        },
        {
            name:'Dr. Gold',
            message:'The weather will pe perfect for the surgery',
            time:'2:14 PM',
            avatar:'../../assets/ChatAvatar3.png',
            newMessage:'10'
        },
        {
            name:'Dr. Wagner',
            message:'The weather will pe perfect for the surgery',
            time:'2:14 PM',
            avatar:'../../assets/ChatAvatar4.png',
            newMessage:'0'
        },
        {
            name:'Regina Jones',
            message:'The weather will pe perfect for the surgery',
            time:'2:14 PM',
            avatar:'../../assets/ChatAvatar5.png',
            newMessage:'0'
        },
])
    return(
    <View style={{flex:1,alignItems:'center'}}>
        <View style={{flexDirection:'row',padding:20,paddingBottom:10, alignItems:'center'}}>
            <View style={{flex:1}}>
            <BackButton handleBackClick={() =>{}}/>
            </View>
            <View style={{flex:18, alignItems:'center'}}>
                <Text style={{color:'#1F89DB',fontSize:16,fontWeight:'600'}}> Conversation </Text>
            </View>               
        </View>
        <View style={{flexDirection:'row', backgroundColor:'#F4F4F4',width:width*0.85,borderRadius:30,justifyContent:'flex-start',alignItems:'center',paddingLeft:15}}>
            <SvgXml xml={searchXml} />
            <TextInput placeholder="Search" style={{padding:10,paddingLeft:15}}/>            
        </View>
        <View style={{backgroundColor:'#fcfcfc',marginVertical:15,width:width*0.95}}>
            {chatList.length && chatList.map((chat,index) =>(
                <TouchableOpacity key={index} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#d4d4d4'}}>
                    <View style={{borderRadius:40, height:50,width:50,paddingHorizontal:4}}>
                        <Image source={require('../../assets/ChatAvatar1.png')} resizeMode="contain"/>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'flex-start'}}>
                        <Text style={{fontWeight:'600',color:'black',fontSize:16}}>{chat.name}</Text>
                        <Text>{chat.message}</Text>
                    </View>

                    <View style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>                   
                        <View style={{backgroundColor:'red',borderRadius:35}}>
                            {chat.newMessage > 0 ?(<Text style={{padding:4,color:'white',fontSize:10}}>{chat.newMessage}</Text>):null}
                        </View>
                        <View>
                            <Text style={{fontSize:12}}>{chat.time}</Text>
                        </View>
                    </View>                   
                </TouchableOpacity>
            ))}
        </View>
    </View>
    )

}
export default Conversation;