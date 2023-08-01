import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { AppliedJob, JobFee, JobLocation, MapPointer, clockXml, saveXml } from "../../assets/XmlSVG/xmlSvg";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";
import { useState } from "react";


const JobDescription = () =>{
    const {height,width} = Dimensions.get('screen')
    const [jobApplied,setJobApplied] = useState(false)
    const jobDescription = `A root canal procedure, also known as endodontic treatment, is a dental procedure performed to repair and save a severely damaged or infected tooth. The procedure involves removing the infected or damaged pulp from the tooth's interior and cleaning and disinfecting the root canals. Here's a step-by-step overview of the root canal procedure:
    Evaluation: Your dentist will examine your tooth and may request X-rays to determine the extent of the damage and whether a root canal is necessary.
    Anesthesia: Before starting the procedure, the dentist will administer local anesthesia to numb the tooth and the surrounding area. This ensures you remain comfortable throughout the procedure.
    Access and isolation: The dentist will place a dental dam, a small rubber sheet, around the tooth to isolate it and keep it clean and dry. This helps prevent contamination from saliva during the procedure.
    Pulp removal: To gain access to the pulp chamber and root canals, your dentist will create a small opening in the crown of the tooth. Specialized dental instruments, such as files, are used to remove the infected or damaged pulp tissue.
    A root canal procedure, also known as endodontic treatment, is a dental procedure performed to repair and save a severely damaged or infected tooth. The procedure involves removing the infected or damaged pulp from the tooth's interior and cleaning and disinfecting the root canals. Here's a step-by-step overview of the root canal procedure:
Evaluation: Your dentist will examine your tooth and may request X-rays to determine the extent of the damage and whether a root canal is necessary.
Anesthesia: Before starting the procedure, the dentist will administer local anesthesia to numb the tooth and the surrounding area. This ensures you remain comfortable throughout the procedure.
Access and isolation: The dentist will place a dental dam, a small rubber sheet, around the tooth to isolate it and keep it clean and dry. This helps prevent contamination from saliva during the procedure.
Pulp removal: To gain access to the pulp chamber and root canals, your dentist will create a small opening in the crown of the tooth. Specialized dental instruments, such as files, are used to remove the infected or damaged pulp tissue.
    `
    return(
        <View style={{flex:1}}>
            {/* Map and Back button*/}
        <View style={{position:'relative',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <Image source={require('../../assets/map.png')} />
            <View style={{position:'absolute',top:100,left:180}}>
                <SvgXml xml={MapPointer}/>
            </View>
            <View style={{position:'absolute',top:33,left:20,borderRadius:2,borderColor:'black'}}>
                <BackButton handleBackClick={() =>{}}/>
            </View>            
        </View>

        {/* Job Details */}
        <View style={{flexDirection:'column',alignItems:'start'}}>        
            <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginHorizontal:10}}>
                <View style= {{height:70,width:70,borderRadius:60,backgroundColor:'#f4f4f4',justifyContent:'center',alignItems:'center',marginRight:10}}>
                    <Image source={require('../../assets/Tooth.png')} resizeMode="contain"/>
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>
                        Root Canal Therapy
                    </Text>
                    <Text style={{color:'black',fontWeight:'400'}}>
                        XYZ Dental Clinic
                    </Text>
                </View>
                <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}>
                    <SvgXml xml={saveXml} width={'30'} height={'30'} />
                </TouchableOpacity>         
            </View>
            <View style={{flexDirection:'column',marginHorizontal:20}}>
                <View style= {{flexDirection:'row',marginVertical:4}}>
                    <SvgXml xml={clockXml} height={'20'} width={'20'} />
                    <Text style={{paddingLeft:4}}>Posted 2 days ago</Text>
                </View>                
                <View style= {{flexDirection:'row',marginBottom:4}}>
                    <SvgXml xml={JobLocation} height={'20'} width={'20'} />
                    <Text style={{paddingLeft:4}}>{`New Delhi (65 kms)`}</Text>
                </View>                
                <View style= {{flexDirection:'row'}}>
                    <SvgXml xml={JobFee} height={'20'} width={'20'} />
                    <Text style={{paddingLeft:4}}>$500 - $700</Text>
                </View>                
                {jobApplied ? (<View style= {{flexDirection:'row'}}>
                    <SvgXml xml={AppliedJob} height={'20'} width={'20'} />
                    <Text style={{paddingLeft:4}}>Applied</Text>
                </View> ):null}               
            </View>
        </View>

        

        {/* Job Description */}
        <View style={{flex:1,flexDirection:'column',marginVertical:10,paddingHorizontal:15,justifyContent:'center',alignItems:'center'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{color:'black'}}>{jobDescription}</Text>
            </ScrollView>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
            <Button label={jobApplied?'Withdraw': 'Apply Now'} handleButtonPress={() =>{jobApplied?setJobApplied(false): setJobApplied(true)}} />
        </View>       
        </View>
    )

}
export default JobDescription;