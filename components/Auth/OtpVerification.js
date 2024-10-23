// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// // import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import logo from '../../assets/SampleLogo.png'; // Replace with your logo path

// const OtpVerification = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   // const navigation = useNavigation(); // Get the navigation prop

//   // const handleLogin = () => {
//   //   navigation.navigate('Login'); // Navigate to the Login screen
//   // };

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image source={logo} style={styles.logo} />

//       {/* Welcome Text */}
//       <Text style={styles.welcomeText}>OTP Verification</Text>
        
//       {/* Description Text */}
//       <Text style={styles.descriptionText}>
//       Please enter the code. We’ve sent an OTP to your phone +91 92xxxxxx11
//       </Text>

//       {/* Login Form */}
//       <View style={styles.formContainer}>
//         {/* Phone Number Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>OTP</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Enter OTP"
//             keyboardType="phone-pad" 
//           />
//         </View>

//         {/* Send Code Button */}
//         <TouchableOpacity style={styles.loginButton} >
//           <Text style={styles.loginButtonText}>Submit</Text>
//         </TouchableOpacity>

//         {/* Forgot Password Link */}
//         <View style={styles.forgotPasswordContainer}>
//           <Text style={styles.forgotPasswordText} >
//             Remember Password? LogIn
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: wp('100%'),
//     height: hp('100%'),
//     backgroundColor: '#f5f5f5',
//   },
//   logo: {
//     width: wp('40%'),
//     height: wp('20%'),
//     marginBottom: hp('5%'),
//   },
//   welcomeText: {
//     fontSize: wp('7%'),
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: hp('2%'),
//   },
//   descriptionText: {
//     fontSize: wp('4%'),
//     color: '#333333',
//     textAlign: 'center',
//     paddingHorizontal: wp('10%'),
//     marginBottom: hp('5%'),
//   },
//   formContainer: {
//     width: '80%',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: hp('2%'),
//   },
//   label: {
//     fontSize: wp('4%'),
//     fontWeight: '400',
//     color: 'black',
//     marginBottom: hp('1%'),
//   },
//   input: {
//     width: '100%',
//     padding: wp('4%'),
//     borderWidth: 1,
//     color:'#F2F2F2',
//     borderColor: '#ccc',
//     borderRadius: wp('2%'),
//   },
//   loginButton: {
//     width: '100%',
//     padding: wp('4%'),
//     backgroundColor: '#4C4DDC',
//     borderRadius: wp('5%'),
//     alignItems: 'center',
//     marginBottom: hp('2%'),
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: wp('4.5%'),
//     fontWeight: 'bold',
//   },
//   forgotPasswordContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: hp('2%'),
//   },
//   forgotPasswordText: {
//     color: "#007AFF",
//     fontSize: wp('4%'),
//     fontWeight: '500',
//   },
// });

// export default OtpVerification;




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Dialog, Portal, PaperProvider, Text as PaperText } from 'react-native-paper'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import logo from '../../assets/LogoGoCap1.png';  // Replace with your logo path
import { API_URL } from '@env';

const OtpVerification = ({ route, navigation }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [token, setToken] = useState(null); // State to store token
   // Get phoneNumber from route params
   const { phoneNumber } = route.params;
   console.log("Phone Number:", phoneNumber);
   
    // Mask the phone number (e.g., 92xxxxxx11)
  const maskedPhoneNumber = `${phoneNumber.slice(0, 2)}xxxxxx${phoneNumber.slice(-2)}`;
  // Retrieve token from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken'); // Retrieve the token
      console.log("userToken",userToken);
      setToken(userToken);
    };
    fetchToken();
  }, []);

  // Show Dialog
  const showDialog = (title, message) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogVisible(true);
  };

  // Hide Dialog
  const hideDialog = () => setDialogVisible(false);

  // Validate OTP
  const validateOtp = () => {
    if (!otp || otp.length !== 4) {
      showDialog('Validation Error', 'Please enter a valid 4-digit OTP.');
      return false;
    }
    return true;
  };

  // Handle OTP Submit
  // const handleOtpSubmit = async () => {
  //   if (!validateOtp()) return;

  //   setLoading(true);

  //   // Include OTP and token in the body
  //   const data = { 
  //     otp, 
  //     token // Sending token along with the OTP
  //   };

  //   try {
  //     const response = await fetch(`${API_URL}/Verified_OTP`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data), // Send data with OTP and token
  //     });

  //     const result = await response.json();
  //     setLoading(false);

  //     if (response.ok && result.status === "true") {
  //       showDialog('Success', result.message);

  //       setTimeout(() => {
  //         hideDialog();
  //         navigation.navigate('NextScreen'); // Replace 'NextScreen' with your next screen
  //       }, 2000);
  //     } else {
  //       showDialog('Error', result.message || 'Invalid OTP. Please try again.');
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     showDialog('Error', 'Failed to verify OTP. Please try again later.');
  //   }
  // };
// Handle OTP Submit
const handleOtpSubmit = async () => {
  if (!validateOtp()) return;

  setLoading(true);

  // Include OTP and token in the body
  const data = { 
    OTP:otp, 
    token // Sending token along with the OTP
  };

  try {
    const response = await fetch(`${API_URL}/Verified_OTP`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Send data with OTP and token
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok && result.status === "true") {
      showDialog('Success', result.message);

      // Remove token from AsyncStorage
      await AsyncStorage.removeItem('userToken');

      setTimeout(() => {
        hideDialog();
        navigation.navigate('LogIn'); // Navigate to the LogIn screen
      }, 2000);
    } else {
      showDialog('Error', result.message || 'Invalid OTP. Please try again.');
    }
  } catch (error) {
    setLoading(false);
    showDialog('Error', 'Failed to verify OTP. Please try again later.');
  }
};

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} resizeMode="contain" />


        {/* OTP Verification Text */}
        <Text style={styles.welcomeText}>OTP Verification</Text>
          
        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Please enter the code. We’ve sent an OTP to your phone +91 - {maskedPhoneNumber}
        </Text>

        {/* OTP Input */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>OTP</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Enter OTP"
              keyboardType="numeric" 
              value={otp}
              onChangeText={setOtp}
              maxLength={6}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleOtpSubmit} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Submit</Text>}
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('LogIn')}>
              Remember Password? Log In
            </Text>
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

export default OtpVerification;
