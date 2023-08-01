import CustomCalendar from './Calendar';
import Checkbox from './Checkbox';
import CustomTextArea from './CustomTextArea';
import CustomTimePicker from './CustomTimePicker';
import Dropdown from './Dropdown';
import ImageUpload from './ImageUpload';
import Password from './PasswordInput';
import Input from './StyledInput';
import {Text, View} from 'react-native';

const DynamicFormHOC = ({fields}) => {
  const renderInputComponent = field => {
    debugger
    switch (field.type) {
      case 'calendar':
        return(
          <CustomCalendar 
            label={field.label}
            title={''}
            variable={field.variable}
            value={field.value}
            onChangeValue={field.onChangeValue}
          />
        )
      case 'input':
        return (
          <Input
            placeholder={field.placeholder}
            label={field.label}
            variable={field.variable}
            value={field.value}
            onChangeValue={field.onChangeValue}
          />
        );
      case 'textArea':
        return (
          <CustomTextArea
            placeholder={field.placeholder}
            label={field.label}
            variable={field.variable}
            value={field.value}
            onChangeValue={field.onChangeValue}
          />
        );
      case 'password':
        return (
          <Password
            placeholder={field.placeholder}            
            label={field.label}
            variable={field.variable}
            value={field.value}
            onChangeValue={field.onChangeValue}
          />
        );

      case 'dropdown':
        return <Dropdown label={field.label} title = {field.title} options={field.options} onChangeValue = {field.onChangeValue} />;

      case 'image':
        return <ImageUpload label={field.label} handleImageUpload={field.handleImageUpload} />

      case 'checkbox':
        return <Checkbox label={field.label} handleCheckboxChange={field.handleCheckboxChange} />

      case 'time':
        return <CustomTimePicker title={field.title} label={field.label} selectedTime={field.selectedTime} onTimeChange={field.onTimeChange} />

      default:
        return;
    }
  };

  return (
    <View>{fields.map((field, index) => (<View key={index}>{renderInputComponent(field)}</View>))}</View>
  );
};

export default DynamicFormHOC;
