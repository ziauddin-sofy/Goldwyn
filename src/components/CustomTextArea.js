import {useMemo, useState} from 'react';
import {StyleSheet, TextInput, Dimensions, View, Text} from 'react-native';

const CustomTextArea = ({
  placeholder,
  label,
  variable,
  value,
  onChangeValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const {width, height} = Dimensions.get('screen');
  return (
    <View>
      {isFocused || value.length > 0 ? (
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : null}
      <View style={styles.inputContainer}>
      <TextInput
        value={value}
        placeholder={isFocused ? '' : placeholder}
        style={{
          ...styles.input,
          width:width*0.85,
          height: 100, // Set the desired height of the text area
          borderColor: isFocused ? '#35B3E9' : '#D2D2D2',
          padding: 10,
          backgroundColor: '#fff',
          textAlignVertical:'top'
        }}
        multiline={true} // Set the multiline prop to true
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text) => onChangeValue(text, variable)}
      />
    </View>
    </View>
  );
};

export default CustomTextArea;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderColor: '#D2D2D2',
    borderWidth: 1,
    borderRadius: 8,
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
});
