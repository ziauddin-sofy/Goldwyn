import {useEffect, useState} from 'react';
import {
  View,
  Modal,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CustomCalendar = ({
  label,
  title,
  options,
  value,
  variableName,
  onChangeValue,
}) => {
  const [selectedDate, setSelectedDate] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const {width, height} = Dimensions.get('screen');
  const [isFocused, setIsFocused] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  const handleDateSelect = day => {
    setSelectedDate(day.dateString);
    setMarkedDates(() => ({
      [day.dateString]: {selected: true, marked: true, selectedColor: '#35B3E9'},
    }));
    // setModalVisible(false);
    setIsFocused(false);
  };

  const renderModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
        setIsFocused(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#35B3E9'}}>
              title
            </Text>
          </View>

          <View>
            <Calendar
              onDayPress={day => handleDateSelect(day)}
              enableSwipeMonths={true}
              markedDates={markedDates}
            />
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
                setModalVisible(false);
                setIsFocused(false);
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
        <Text style={styles.label}>Label</Text>
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
        }}>
        <Text>{selectedDate?selectedDate:'YYYY-MM-DD'}</Text>
      </TouchableOpacity>
      {modalVisible && renderModal()}
    </View>
  );
};
export default CustomCalendar;

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
    width: '90%',
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
    marginVertical: 10,
  },
});
