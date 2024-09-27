// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import { Button, Dialog, Portal, PaperProvider, Text as PaperText } from 'react-native-paper'; // Import Paper components
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import logo from '../../assets/SampleLogo.png'; // Replace with your logo path
// import { API_URL } from '@env'; // Import API URL from .env file

// const ForgotPassword = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [dialogVisible, setDialogVisible] = useState(false);
//   const [dialogMessage, setDialogMessage] = useState('');
//   const [dialogTitle, setDialogTitle] = useState('');
//   const navigation = useNavigation(); // Get the navigation prop

//   // Show Dialog
//   const showDialog = (title, message) => {
//     setDialogTitle(title);
//     setDialogMessage(message);
//     setDialogVisible(true);
//   };

//   // Hide Dialog
//   const hideDialog = () => setDialogVisible(false);

//   // Handle sending the code
//   const handleSendCode = async () => {
//     if (!phoneNumber) {
//       showDialog('Validation Error', 'Please enter your phone number.');
//       return;
//     }

//     setLoading(true);

//     const data = {
//       PhoneNumber: phoneNumber,
//     };

//     try {
//       const response = await fetch(`${API_URL}/forgotPassword`, { // Adjust API endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       setLoading(false);

//       if (response.ok && result.status === 'true') {
//         // Save the token in AsyncStorage
//         await AsyncStorage.setItem('authToken', result.token);

//         showDialog('Success', 'Code sent successfully!');
//         // Handle navigation or other actions after successful code sending
//         // Navigate to ForgetOtpVerify screen after success
//         setTimeout(() => {
//           navigation.navigate('ForgetOtpVerify'); // Ensure ForgetOtpVerify is defined in your navigator
//         }, 1000); // Adjust the delay as needed
//       } else {
//         showDialog('Error', result.message || 'Failed to send code. Please try again.');
//       }
//     } catch (error) {
//       setLoading(false);
//       showDialog('Error', 'Failed to send code. Please try again later.');
//     }
//   };

//   const handlePasswordLogin = () => {
//     navigation.navigate('LogIn');
//   };

//   return (
//     <PaperProvider>
//       <View style={styles.container}>
//         {/* Logo */}
//         <Image source={logo} style={styles.logo} />

//         {/* Welcome Text */}
//         <Text style={styles.welcomeText}>OTP Verification</Text>

//         {/* Description Text */}
//         <Text style={styles.descriptionText}>
//           Don’t worry! It happens. Please enter the phone number associated with your account.
//         </Text>

//         {/* Login Form */}
//         <View style={styles.formContainer}>
//           {/* Phone Number Input */}
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Phone Number</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Phone Number"
//               keyboardType="phone-pad"
//               value={phoneNumber}
//               onChangeText={setPhoneNumber}
//             />
//           </View>

//           {/* Send Code Button */}
//           <TouchableOpacity style={styles.loginButton} onPress={handleSendCode} disabled={loading}>
//             {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Send Code</Text>}
//           </TouchableOpacity>

//           {/* Forgot Password Link */}
//           <View style={styles.forgotPasswordContainer}>
//             <TouchableOpacity onPress={handlePasswordLogin}>
//               <Text style={styles.forgotPasswordText}>Remember Password? LogIn</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Dialog for alerts */}
//         <Portal>
//           <Dialog visible={dialogVisible} onDismiss={hideDialog}>
//             <Dialog.Title>{dialogTitle}</Dialog.Title>
//             <Dialog.Content>
//               <PaperText>{dialogMessage}</PaperText>
//             </Dialog.Content>
//             <Dialog.Actions>
//               <Button onPress={hideDialog}>OK</Button>
//             </Dialog.Actions>
//           </Dialog>
//         </Portal>
//       </View>
//     </PaperProvider>
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
//     color: 'black',
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

// export default ForgotPassword;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Button, Dialog, Portal, PaperProvider, Text as PaperText } from 'react-native-paper'; // Import Paper components
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import logo from '../../assets/SampleLogo.png'; // Replace with your logo path
import { API_URL } from '@env'; // Import API URL from .env file

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const navigation = useNavigation(); // Get the navigation prop

  // Show Dialog
  const showDialog = (title, message) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogVisible(true);
  };

  // Hide Dialog
  const hideDialog = () => setDialogVisible(false);

  // Handle sending the code
  const handleSendCode = async () => {
    if (!phoneNumber) {
      showDialog('Validation Error', 'Please enter your phone number.');
      return;
    }

    setLoading(true);

    const data = {
      PhoneNumber: phoneNumber,
    };

    try {
      const response = await fetch(`${API_URL}/forgotPassword`, { // Adjust API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok && result.status === 'true') {
        // Save the token in AsyncStorage
        await AsyncStorage.setItem('authToken', result.token);

        showDialog('Success', 'Code sent successfully!');
        // Navigate to ForgetOtpVerify screen with phoneNumber
        setTimeout(() => {
          navigation.navigate('ForgetOtpVerify', { phoneNumber }); // Pass phoneNumber as a parameter
        }, 1000); // Adjust the delay as needed
      } else {
        showDialog('Error', result.message || 'Failed to send code. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      showDialog('Error', 'Failed to send code. Please try again later.');
    }
  };

  const handlePasswordLogin = () => {
    navigation.navigate('LogIn');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>OTP Verification</Text>

        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Don’t worry! It happens. Please enter the phone number associated with your account.
        </Text>

        {/* Login Form */}
        <View style={styles.formContainer}>
          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Send Code Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleSendCode} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Send Code</Text>}
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={handlePasswordLogin}>
              <Text style={styles.forgotPasswordText}>Remember Password? LogIn</Text>
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
    color: 'black',
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

export default ForgotPassword;
