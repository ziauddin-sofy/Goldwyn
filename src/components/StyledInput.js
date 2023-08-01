import {useMemo, useState} from 'react';
import {StyleSheet, TextInput, Dimensions, View, Text} from 'react-native';

const Input = ({placeholder, label, variable, value, onChangeValue}) => {
  const [isFocused, setIsFocused] = useState(false);
  const {width, height} = Dimensions.get('screen');
  return (
    <View>
      {isFocused || value.length > 0 ? (
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : null}
      <TextInput
        value={value}
        placeholder={isFocused ? '' : placeholder}
        style={{
          ...styles.input,
          width: width * 0.85,
          borderColor: isFocused ? '#35B3E9' : '#D2D2D2',
          // zIndex:11,
          padding: 10,
          backgroundColor: '#fff',
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => {
          onChangeValue(e.nativeEvent.text, variable);
        }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: '#D2D2D2',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
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
