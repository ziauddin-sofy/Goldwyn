import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Splash from './src/screens/Splash/Splash';
import Role from './src/screens/Registration/Role';
import Login from './src/screens/Login/Login';
import RegisterationForm from './src/screens/Registration/RegistrationForm';
import Dropdown from './src/components/Dropdown';
import CustomCalendar from './src/components/Calendar';
import EnterEmail from './src/screens/ForgotPassword/EnterEmail';
import EnterOTP from './src/screens/ForgotPassword/EnterOTP';
import ResetPassword from './src/screens/ForgotPassword/ResetPassword';
import Home from './src/screens/Home/Home';
import SkeletonLoading from './src/components/SkeletonLoading';
import RegisterationFormTwo from './src/screens/Registration/RegistrationForm2';
import JobDescription from './src/screens/Job/JobDescription';
import JobApply from './src/screens/Job/JobApply';
import RegisterationFormThree from './src/screens/Registration/RegistrationForm3';
import Setting from './src/screens/Setting/Setting';
import AppliedJobs from './src/screens/Job/AppliedJobs';
import JobApplicants from './src/screens/Job/JobApplicants';
import Profile from './src/components/Profile';
// import CustomTextArea from './src/components/TextArea';
import UserProfile from './src/screens/Profile/UserProfile';
import CandidateDetail from './src/screens/Job/CandidateDetail';
import Notification from './src/screens/Home/Notification';
import Conversation from './src/screens/Conversations/Conversation';
import ConversationDetail from './src/screens/Conversations/ConversationDetail';
import JobPost from './src/screens/Job/JobPost';
const {width, height} = Dimensions.get('screen');

const App = () => {
  return <JobPost />;
};

export default App;
