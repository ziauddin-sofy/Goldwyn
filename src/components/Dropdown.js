import {useEffect, useState} from 'react';
import {
  View,
  Modal,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Dropdown = ({label, title, options, value, variableName, onChangeValue}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const {width, height} = Dimensions.get('screen');
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [dropdownOptions, setDropdownOptions] = useState([]);

  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    setSearchText('');
    if (options?.length) setDropdownOptions(options);
    if (options?.length) setFilteredOptions(options);
    if (value?.length) setSelectedOption({value:value,label:label});
  }, []);

  const handleOptionSearch = text => {
    if (text.length > 0) {
      setSearchText(text);
      let newOptions = dropdownOptions.filter(item =>
        item.label.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredOptions(() => newOptions);
    } else {
      setSearchText('');
      setFilteredOptions(() => dropdownOptions);
    }
  };

  const handleValueSelect = option => {
    setSelectedOption({value:option.value,label:option.label});
    onChangeValue(option.value, variableName);
    setModalVisible(false)
    setIsFocused(false)
  };

  const renderModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setSearchText('');
        setModalVisible(false);
        setIsFocused(false)
      }}>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent]}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#35B3E9'}}>
              {title}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderRadius: 8,
              borderColor: '#F5F5F5',
              borderWidth: 2,
              height: 40,
              marginTop: 6,
            }}>
            <TextInput
              value={searchText}
              placeholder="Search"
              onChangeText={text => handleOptionSearch(text)}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <ScrollView style={{width: '100%', height: 250}}>
              {filteredOptions.length ? (
                filteredOptions.map((option, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleValueSelect(option)}
                      style={{
                        backgroundColor:
                          selectedOption.value == option.value ? '#35B3E9' : '#F5F5F5',
                        borderRadius: 30,
                        width: '100%',
                        marginBottom: 5,
                        padding: 10,
                        paddingLeft: 14,
                      }}>
                      <Text style={{color: selectedOption.value == option.value ? 'white' : 'black'}}>{option.label}</Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text>Searched Option Not Found</Text>
              )}
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableHighlight
              style={{
                borderRadius: 8,
                height: 33,
                backgroundColor: '#35B3E9',
                alignItems: 'center',
                justifyContent: 'center',
                width: width * 0.3,
              }}
              onPress={() => {
                setSearchText('');
                setModalVisible(false);
                setIsFocused(false)
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Close
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
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
          setModalVisible(true);
        }}
      >
        <Text>{selectedOption ? selectedOption.label:title}</Text>
        </TouchableOpacity>
      {modalVisible && renderModal()}
    </View>
  );
};
export default Dropdown;

const styles = StyleSheet.create({
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
