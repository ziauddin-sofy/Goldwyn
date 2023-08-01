import {StyleSheet, TouchableOpacity,Text} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ArrowLeft } from '../assets/XmlSVG/xmlSvg';

const BackButton = ({handleBackClick}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={handleBackClick}>
      {/* <Text style={{color:'#35B3E9',fontSize:24}}> {'<'} </Text> */}
      <SvgXml xml={ArrowLeft} height={'18'} width={'18'} />
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
