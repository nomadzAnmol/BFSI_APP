import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logo from '../../assets/SampleLogo.png'; // Replace with your logo path
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for eye icon
import { Button, Dialog, Portal, PaperProvider, Text as PaperText } from 'react-native-paper'; // Import Paper components
import { API_URL } from '@env'; // Import the API URL from .env file
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const LogIn = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');

  // Show Dialog
  const showDialog = (title, message) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogVisible(true);
  };

  // Hide Dialog
  const hideDialog = () => setDialogVisible(false);

  // Handle login
  const handleLogin = async () => {
    if (!phoneNumber || !password) {
      showDialog('Validation Error', 'Please enter both phone number and password.');
      return;
    }

    setLoading(true);

    const data = {
      PhoneNumber: phoneNumber,
      Password: password,
    };

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('respoinse -', result);
      setLoading(false);

      if (response.ok && result.status === 'true') {
        // Save token in AsyncStorage
        await AsyncStorage.setItem('userToken', result.token);

        showDialog('Success', 'Login successful!');

        setTimeout(() => {
          hideDialog();
         // navigation.navigate('BottomTabNavigator'); // Navigate to HomeScreen after successful login
         navigation.navigate('BottomTabNavigator'); 
        }, 1000);
      } else {
        showDialog('Error', result.message || 'Login failed. Please check your credentials.');
        // Reset form fields on error
        setPhoneNumber('');
        setPassword('');
      }
    } catch (error) {
      setLoading(false);
      showDialog('Error', 'Failed to login. Please try again later.');
      // Reset form fields on error
      setPhoneNumber('');
      setPassword('');
    }
  };

  // Navigation handlers
  const handleForgotNavigation = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUpNavigation = () => {
    navigation.navigate('SignUp');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Nice to see you again</Text>

        {/* Login Form */}
        <View style={styles.formContainer}>
          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                <Icon name={showPassword ? 'eye-off' : 'eye'} size={wp('5%')} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={handleForgotNavigation} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Log In</Text>}
          </TouchableOpacity>

          {/* Divider Line */}
          <View style={styles.dividerLine}></View>

          {/* Sign in with Google Button */}
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUpNavigation}>
              <Text style={styles.signUpLink}> Sign Up now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dialog for alerts */}
        <Portal>
          <Dialog visible={dialogVisible} onDismiss={hideDialog}>
            <Dialog.Title>{dialogTitle}</Dialog.Title>
            <Dialog.Content>
              <PaperText>{dialogMessage}</PaperText>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  // Styles remain the same
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: wp('40%'),
    height: wp('20%'),
    marginBottom: hp('5%'),
  },
  welcomeText: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: 'black',
    marginBottom: hp('2%'),
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: 'black',
    marginBottom: hp('1%'),
  },
  input: {
    width: '100%',
    padding: wp('4%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('2%'),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
  },
  passwordInput: {
    flex: 1,
    padding: wp('4%'),
    borderWidth: 0,
    borderColor: 'transparent',
  },
  eyeIcon: {
    paddingHorizontal: wp('2%'),
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: hp('2%'),
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: wp('4%'),
  },
  loginButton: {
    width: '100%',
    padding: wp('4%'),
    backgroundColor: '#4C4DDC',
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  loginButtonText: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  dividerLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: hp('2%'),
  },
  googleButton: {
    width: '100%',
    padding: wp('4%'),
    backgroundColor: '#DB4437',
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  googleButtonText: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
  },
  signUpText: {
    fontSize: wp('4%'),
    color: 'black',
  },
  signUpLink: {
    fontSize: wp('4%'),
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default LogIn;
