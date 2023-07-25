import Dropdown from './Dropdown';
import Password from './PasswordInput';
import Input from './StyledInput';
import {Text, View} from 'react-native';

const DynamicFormHOC = ({fields}) => {
  const renderInputComponent = field => {
    debugger
    switch (field.type) {
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

      default:
        return;
    }
  };

  return (
    <View>{fields.map((field, index) => (<View key={index}>{renderInputComponent(field)}</View>))}</View>
  );
};

export default DynamicFormHOC;
