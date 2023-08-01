import { useState } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Checkbox = ({label, handleCheckboxChange}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChangeInternal = () => {
    setChecked(!checked);
  };
  return (
    <TouchableOpacity onPress={handleCheckboxChangeInternal} style={{marginBottom:8,paddingLeft:4}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={handleCheckboxChange}>
          <Icon
            name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color={checked ? 'gray' : 'gray'}
          />
        </TouchableOpacity>
        <Text style={{paddingLeft:5}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
