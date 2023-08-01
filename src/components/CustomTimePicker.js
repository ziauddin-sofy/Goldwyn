import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const {width,height} = Dimensions.get('screen')

const CustomTimePicker = ({label,title, selectedTime, onTimeChange}) => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isFocused,setIsFocused] = useState(false)


  const hideTimePicker = () => {
    setTimePickerVisibility(false);
    setIsFocused(false)
  };

  const handleConfirm = time => {
    hideTimePicker();
    setIsFocused(false)
    onTimeChange(time);
  };

  const renderTimePicker = () => {
    return (
      <View>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideTimePicker}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <TouchableOpacity
        style={{
          ...styles.input,
          width: width * 0.85,
          borderColor: isFocused ? '#35B3E9' : '#D2D2D2',
          padding: 10,
          backgroundColor: '#fff',
        }}
        onPress={() => {
          setIsFocused(true);
          setTimePickerVisibility(true);
        }}>
        <Text style={{padding:4}}>{selectedTime ? selectedTime : label}</Text>
      </TouchableOpacity>
      {isTimePickerVisible && renderTimePicker()}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#35B3E9',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      width: '80%',
      // height: 400,
    },
    labelWrapper: {
      position: 'absolute',
      top: 1,
      left: 10,
      backgroundColor: 'white',
      paddingHorizontal: 4,
      zIndex: 1,
    },
    label: {
      fontSize: 12,
      color: 'gray',
    },
    input: {
      borderColor: '#D2D2D2',
      borderWidth: 1,
      borderRadius: 8,
      marginVertical:10
    },
});

export default CustomTimePicker;
