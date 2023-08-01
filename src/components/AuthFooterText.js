import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
const AuthFooterText = ({handleLoginPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Already have an Account? </Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: '#35B3E9',
            fontWeight: '500',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AuthFooterText;
