import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {UploadAadhar} from '../assets/XmlSVG/xmlSvg';
const {width,height} = Dimensions.get('screen')

const ImageUpload = ({label, handleImageUpload}) => {
    const handleOpenGallery= () =>{}
  return (
    <View style={{marginBottom: 10}}>
      <View style={{marginVertical: 10}}>
        <Text style={{}}>{label}</Text>
        <Text style={{fontSize:10}}>PNG, JPG or PDF (Max 800x400 px)</Text>
      </View>
      <View style={{alignItems: 'center',backgroundColor:'white'}}>
        <TouchableOpacity
        onPress={handleOpenGallery}
          style={{
            height: 100,
            width: width*0.85,
            borderWidth: 1,
            borderRadius: 10,
            borderStyle: 'dashed',
            borderColor: '#E0E0E0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <SvgXml xml={UploadAadhar} />
            <Text style={{color: '#5FD3FF', padding: 2}}>Click to Upload</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageUpload;
