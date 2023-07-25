import {StyleSheet, TouchableOpacity,Text} from 'react-native';

const BackButton = ({handleBackClick}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={handleBackClick}>
      <Text style={{color:'#35B3E9',fontSize:24}}> {'<'} </Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    height:38,
    width:38,
    backgroundColor: '#F4F4F4',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6
  },
});
