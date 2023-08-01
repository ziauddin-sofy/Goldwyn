import { ScrollView, Text, TouchableOpacity, View, Animated, Dimensions } from "react-native";
import BackButton from "../../components/BackButton";
import Input from "../../components/StyledInput";
import { useRef, useState,useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import { SvgXml } from "react-native-svg";
import { AddProcedure } from "../../assets/XmlSVG/xmlSvg";
import Button from "../../components/Button";
const {width,height} = Dimensions.get('screen')

const JobApply =()=>{
    const [procedures,setProcedures] = useState([{
        description:'',
        duration:'',
        amount:'',
        procedure:'add'
    }   
])

const handleAddProcedure = (index) =>{
    let newProcedure = {
        description:'',
        duration:'',
        amount:'',
        procedure:'add'
    }
    let existingProcedures = [...procedures]
    existingProcedures.forEach(item =>{item.procedure='remove'})
    existingProcedures.push(newProcedure)
    setProcedures(existingProcedures)    
}
const handleRemoveProcedure = (procedureIndex) =>{  
    let existingProcedures = procedures.filter((_,index) => (index !==procedureIndex))
    existingProcedures.forEach((item,index) =>{
        item.procedure = 'remove';
        if(index == existingProcedures.length-1) item.procedure = 'add'
    })   
    setProcedures(existingProcedures)  
}

const handleProcedureAddRemove = (procedure,index) =>{
    debugger
    if(procedure.procedure == 'add'){
        handleAddProcedure(index)
    }else{
        handleRemoveProcedure(index)
    }
}



    return(
    <View style={{flex:1,backgroundColor:'white'}}>
        {/* Heading */}
        <View style={{flexDirection:'row',alignItems:'center',padding:20}}>
            <View style={{flex:0.3,justifyContent:'flex-start'}}><BackButton handleBackClick={() =>{}}/></View>
            <View style={{flex:5,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'600',fontSize:16,color:'#1F89DB'}}>Apply</Text></View>
        </View>

        {/* Procedures */}
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'black',fontSize:14,fontWeight:'600'}}>How many Procedures do you want to include?</Text>
        </View>
        <ScrollView>
            {procedures.map((item,index) => (
            <View 
            style={{
                margin:6,
                borderRadius:8,
                borderColor:'#d7d7d7',
                borderWidth:1               
              }}
            key={index}>          
                <View style={{justifyContent:'center', alignItems:'center'}}>                    
                    <View style={{marginVertical:10}}>
                        <Input placeholder={'Enter description'} label={'Description'} variable={'description'} value={item.description} onChangeValue={() =>{}} />
                        <Dropdown title={'Select Description'} options={[{value:'30 mins',label:'30 mins'},{value:'1 hr',label:'1 hr'},{value:' more than 1hr',label:'More than 1hr'}]} label={'Duration'} variable={'duration'} value={item.duration} onChangeValue={() =>{}} />
                        <Input placeholder={'Enter Amount'} label={'Amount'} variable={'amount'} value={item.amount} onChangeValue={() =>{}} />
                    </View>
                </View>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center',paddingLeft:25}} onPress={() => handleProcedureAddRemove(item,index)}>
                    <SvgXml xml={AddProcedure} height={'30'} width={'30'} />
                    <Text style={{paddingLeft:10}}>{item.procedure=='add'? 'Add Procedure':'Remove Procedure'}</Text>
                </TouchableOpacity>
            </View>))}
        </ScrollView>  

        {/* total price and submit button */}
        <View style={{marginVertical:25,alignItems:'center'}}>        
        <View style ={{marginBottom:10,flexDirection:'row',paddingLeft:25}}>
            <View style={{flex:4,justifyContent:'flex-start'}}>
                <Text style={{color:'black', fontWeight:'bold'}}>Total Price of Procedure</Text>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={{color:'black', fontWeight:'bold'}}>$0.00</Text>
            </View>

        </View>
        <Button label={'Submit'} handleButtonPress={() =>{}} />
        </View>
    </View>)
}
export default JobApply;