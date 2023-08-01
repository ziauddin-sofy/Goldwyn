import {Dimensions, StyleSheet, TouchableHighlight,Text} from 'react-native';

const Button = ({label, handleButtonPress}) => {
  const {width, height} = Dimensions.get('screen');
  const handleClick = () => {
    handleButtonPress();
  };
  return (
    <TouchableHighlight
      style={{...styles.loginButton, width: width * 0.85}}
      onPress={handleClick}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  loginButton: {
    borderRadius: 8,
    height: 48,
    backgroundColor: '#35B3E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
  },
});
