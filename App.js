import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Splash from './src/screens/Splash/Splash';
import Role from './src/screens/Registration/Role';
import Login from './src/screens/Login/Login';
import RegisterationForm from './src/screens/Registration/RegistrationForm';
import Dropdown from './src/components/Dropdown';
import CustomCalendar from './src/components/Calendar';
import EnterEmail from './src/screens/ForgotPassword/EnterEmail';
import EnterOTP from './src/screens/ForgotPassword/EnterOTP';
const {width, height} = Dimensions.get('screen');

const App = () => {
  return <EnterOTP />;
};

export default App;
