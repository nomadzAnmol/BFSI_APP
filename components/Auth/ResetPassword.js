// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import logo from '../../assets/SampleLogo.png'; // Replace with your logo path

// const ResetPassword = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image source={logo} style={styles.logo} />

//       {/* Welcome Text */}
//       <Text style={styles.welcomeText}>Reset password</Text>
        
//       {/* Description Text */}
//       <Text style={styles.descriptionText}>
//         Please type something you’ll remember
//       </Text>

//       {/* Login Form */}
//       <View style={styles.formContainer}>
//         {/* New Password Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>New Password</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Must be 8 characters"
//             secureTextEntry={!showPassword}
//           />
//         </View>

//         {/* Confirm New Password Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Confirm New Password</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Re-Enter Password"
//             secureTextEntry={!showPassword}
//           />
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Submit</Text>
//         </TouchableOpacity>

//         {/* Remember Password Link */}
//         <View style={styles.forgotPasswordContainer}>
//           <Text style={styles.forgotPasswordText}>
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
//     borderColor: '#ccc',
//     borderRadius: wp('2%'),
//     color: '#000',
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

// export default ResetPassword;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import logo from '../../assets/SampleLogo.png'; // Replace with your logo path
// import { API_URL } from '@env'; // Import API URL from .env file

// const ResetPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Validation Error', 'Passwords do not match');
//       return;
//     }

//     setLoading(true);

//     try {
//       // Retrieve token from AsyncStorage
//       const token = await AsyncStorage.getItem('authToken');
//       if (!token) {
//         Alert.alert('Error', 'Token not found.');
//         setLoading(false);
//         return;
//       }

//       const data = {
//         token: token,
//         Password: password,
//       };

//       const response = await fetch(`${API_URL}/changePassword`, { // Adjust API endpoint
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       setLoading(false);

//       if (response.ok) {
//         Alert.alert('Success', 'Password reset successfully');
//         // Navigate to login screen or handle success
//       } else {
//         Alert.alert('Error', result.message || 'Failed to reset password.');
//       }
//     } catch (error) {
//       setLoading(false);
//       Alert.alert('Error', 'Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image source={logo} style={styles.logo} />

//       {/* Welcome Text */}
//       <Text style={styles.welcomeText}>Reset Password</Text>
        
//       {/* Description Text */}
//       <Text style={styles.descriptionText}>
//         Please type something you’ll remember.
//       </Text>

//       {/* Password Form */}
//       <View style={styles.formContainer}>
//         {/* New Password Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>New Password</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Enter new password"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//         </View>

//         {/* Confirm Password Input */}
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Confirm New Password</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Re-enter new password"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} disabled={loading}>
//           <Text style={styles.loginButtonText}>{loading ? 'Submitting...' : 'Submit'}</Text>
//         </TouchableOpacity>
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
//     borderColor: '#ccc',
//     borderRadius: wp('2%'),
//     color: '#000',
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
// });

// export default ResetPassword;


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Dialog, Portal, PaperProvider, Text as PaperText } from 'react-native-paper'; // Import Paper components
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/SampleLogo.png'; // Replace with your logo path
import { API_URL } from '@env'; // Import API URL from .env file

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const navigation = useNavigation(); // Hook for navigation

  // Show Dialog
  const showDialog = (title, message) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogVisible(true);
  };

  // Hide Dialog
  const hideDialog = () => setDialogVisible(false);

  // Handle form submission
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      showDialog('Validation Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      // Retrieve token from AsyncStorage
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        showDialog('Error', 'Token not found.');
        setLoading(false);
        return;
      }

      const data = {
        token: token,
        Password: password,
      };

      const response = await fetch(`${API_URL}/changePassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        showDialog('Success', 'Password reset successfully.');
        await AsyncStorage.removeItem('authToken'); // Remove token after success
        navigation.navigate('LogIn'); // Navigate to login screen
      } else {
        showDialog('Error', result.message || 'Failed to reset password.');
      }
    } catch (error) {
      setLoading(false);
      showDialog('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={logo} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Reset Password</Text>
        
        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Please type something you’ll remember.
        </Text>

        {/* Password Form */}
        <View style={styles.formContainer}>
          {/* New Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Enter new password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm New Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Re-enter new password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Submit</Text>}
          </TouchableOpacity>
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
});

export default ResetPassword;
