import { Dimensions, Image, Text, View } from "react-native";
import BackButton from "../../components/BackButton";
const {width,height} = Dimensions.get('screen')

const Notification = () =>{
    const notifications = [
        {
            postedBy:'Dr. Carmen Parksouth',
            jobTitle:'Root Canal Therapy',
            location:'New Delhi'
        },
        {
            postedBy:'Dr. Carmen Parksouth',
            jobTitle:'Root Canal Therapy',
            location:'New Delhi'
        },
        {
            postedBy:'Dr. Carmen Parksouth',
            jobTitle:'Root Canal Therapy',
            location:'New Delhi'
        },
    ]
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',padding:20,paddingLeft:10,paddingBottom:10, alignItems:'center'}}>
                <View style={{flex:1}}>
                <BackButton handleBackClick={() =>{}}/>
                </View>
                <View style={{flex:18, alignItems:'center'}}>
                    <Text style={{color:'#1F89DB',fontSize:16,fontWeight:'600'}}> Notifications </Text>
                </View>               
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{flex:1,backgroundColor:'red',borderTopRightRadius:4,borderBottomRightRadius:4}} />
                <View style={{flex:34,flexDirection:'row', alignItems:'center',paddingLeft:6}}>
                <View style={{flex:2,height:40,width:40,borderRadius:60}}>
                    <Image source={require('../../assets/AppliedDoctor.png')} resizeMode="contain"/>
                </View>
                <View style={{flex:14,padding:10,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'black'}}>
                        Dr.Carmen Parksouth has posted a high priority Root canal therapy job in New Delhi.
                    </Text>                    
                </View>
                <View style={{flex:2}}>
                    <Text style={{fontWeight:'500',color:'black'}}>1 day</Text>
                </View>

                </View>
                
            </View>
        </View>
    )

}
export default Notification;