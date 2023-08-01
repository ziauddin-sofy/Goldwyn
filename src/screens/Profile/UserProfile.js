import {useEffect, useRef, useState} from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import BackButton from '../../components/BackButton';
const {width, height} = Dimensions.get('screen');

import Profile from '../../components/Profile';

const UserProfile = () => {

  return (
    <View style={{flex:1}}>
        <View style={{position:'absolute',left:20,top:20}}>
            <BackButton />
        </View>
        <Profile />
    </View>

  );
};

export default UserProfile;
