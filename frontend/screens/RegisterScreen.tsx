/* eslint-disable react-native/no-inline-styles */
import {Icon, Button} from '@rneui/themed';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import Colors from '../global/Color';

const RegisterScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registering user:', username);
    console.log('Password:', password);
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/LoginBackground.png')}
        style={styles.background}
      />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}>
        <Icon
          name="arrow-back"
          type="ionicons"
          size={30}
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'flex-start',
            marginTop: 20,
            marginLeft: 20,
            width: 30,
            height: 30,
            color: 'black',
          }}
        />
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Create new{'\n  '} Account
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(300).duration(1000).springify()}
          style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                textDecorationLine: 'underline',
              }}>
              Already Registered? Login
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={{marginTop: 130, alignItems: 'center'}}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'#706d6d'}
            style={{
              fontSize: 16,
              padding: 10,
              backgroundColor: '#eff2ff',
              borderRadius: 8,
              width: '90%',
            }}
          />
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(500).duration(1000).springify()}
          style={{marginTop: 20, alignItems: 'center'}}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#706d6d'}
            style={{
              fontSize: 16,
              padding: 10,
              backgroundColor: '#eff2ff',
              borderRadius: 8,
              width: '90%',
            }}
          />
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(600).duration(1000).springify()}
          style={{marginTop: 20, alignItems: 'center'}}>
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor={'#706d6d'}
            style={{
              fontSize: 16,
              padding: 10,
              backgroundColor: '#eff2ff',
              borderRadius: 8,
              width: '90%',
            }}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{
            marginTop: 150,
            alignItems: 'center',
            width: '100%',
          }}>
          <Button
            title="Register"
            onPress={handleRegister}
            titleStyle={{fontWeight: '700', fontSize: 20}}
            buttonStyle={{
              backgroundColor: Colors.button,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
              width: 300,
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

export default RegisterScreen;