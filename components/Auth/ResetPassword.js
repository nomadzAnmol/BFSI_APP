import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logo from '../../assets/SampleLogo.png'; // Replace with your logo path

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Reset password</Text>
        
      {/* Description Text */}
      <Text style={styles.descriptionText}>
        Please type something you’ll remember
      </Text>

      {/* Login Form */}
      <View style={styles.formContainer}>
        {/* New Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Must be 8 characters"
            secureTextEntry={!showPassword}
          />
        </View>

        {/* Confirm New Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Re-Enter Password"
            secureTextEntry={!showPassword}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Remember Password Link */}
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>
            Remember Password? LogIn
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  descriptionText: {
    fontSize: wp('4%'),
    color: '#333333',
    textAlign: 'center',
    paddingHorizontal: wp('10%'),
    marginBottom: hp('5%'),
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
    fontWeight: '400',
    color: 'black',
    marginBottom: hp('1%'),
  },
  input: {
    width: '100%',
    padding: wp('4%'),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('2%'),
    color: '#000',
  },
  loginButton: {
    width: '100%',
    padding: wp('4%'),
    backgroundColor: '#4C4DDC',
    borderRadius: wp('5%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  loginButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: wp('4%'),
    fontWeight: '500',
  },
});

export default ResetPassword;
