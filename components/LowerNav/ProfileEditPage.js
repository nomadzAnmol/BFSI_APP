

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_URL } from '@env';

// const ProfileEditPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     password: ''
//   });

//   const [isEditable, setIsEditable] = useState({
//     fullName: false,
//     phone: false,
//     email: false,
//     password: false,
//   });

//   const [loading, setLoading] = useState(true);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
//   // Fetch token from AsyncStorage and load profile data
//   const fetchProfileData = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       if (token) {
//         const response = await fetch(`${API_URL}/profile`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ token }),
//         });
//         const data = await response.json();
//         if (data.data) {
//           setFormData({
//             fullName: data.data.name || 'Not Available',
//             phone: data.data.phone || 'Not Available',
//             email: data.data.email || 'Not Available',
//             password: '', // Do not prefill the password for security reasons
//           });
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//       Alert.alert('Error', 'Failed to load profile data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   // Handle input changes
//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   // Toggle edit state for a specific field
//   const toggleEdit = (field) => {
//     setIsEditable({ ...isEditable, [field]: !isEditable[field] });
//   };

//   // Handle save action
//   const handleSave = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       console.log("PayloadToken",token);
      
//       const payload = {
//         token,
//         FullName: formData.fullName !== 'Not Available' ? formData.fullName : null,
//         PhoneNumber: formData.phone !== 'Not Available' ? formData.phone : null,
//         Email: formData.email !== 'Not Available' ? formData.email : null,
//         Password: formData.password || null // Send the new password if updated
//       };
      
//       console.log("Payload**..", payload);
//       const response = await fetch(`${API_URL}/profileUpdate`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       // Check if response is JSON
//       const result = await response.json();
//       console.log('Response', result);

//       if (result.status === 'true') {
//         Alert.alert('Success', 'Profile updated successfully');
//       } else {
//         Alert.alert('Error', 'Failed to update profile');
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Alert.alert('Error', 'Failed to update profile');
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Edit Your Profile</Text>

//       {/* Full Name Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <View style={styles.editableContainer}>
//           <TextInput
//             style={styles.input}
//             value={formData.fullName}
//             onChangeText={(value) => handleChange('fullName', value)}
//             placeholder="Full Name"
//             editable={isEditable.fullName} // Make editable based on state
//           />
//           <TouchableOpacity onPress={() => toggleEdit('fullName')} style={styles.editButton}>
//             <FontAwesome name="edit" size={20} color="#4C4DDC" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Phone Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Phone Number</Text>
//         <View style={styles.editableContainer}>
//           <TextInput
//             style={styles.input}
//             value={formData.phone}
//             onChangeText={(value) => handleChange('phone', value)}
//             keyboardType="phone-pad"
//             placeholder="Phone Number"
//             editable={isEditable.phone} // Make editable based on state
//           />
//           <TouchableOpacity onPress={() => toggleEdit('phone')} style={styles.editButton}>
//             <FontAwesome name="edit" size={20} color="#4C4DDC" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Email Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <View style={styles.editableContainer}>
//           <TextInput
//             style={styles.input}
//             value={formData.email}
//             onChangeText={(value) => handleChange('email', value)}
//             keyboardType="email-address"
//             placeholder="Email"
//             editable={isEditable.email} // Make editable based on state
//           />
//           <TouchableOpacity onPress={() => toggleEdit('email')} style={styles.editButton}>
//             <FontAwesome name="edit" size={20} color="#4C4DDC" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Password Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             value={formData.password}
//             onChangeText={(value) => handleChange('password', value)}
//             secureTextEntry={!isPasswordVisible}
//             placeholder="Password"
//             editable={isEditable.password} // Make editable based on state
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
//             <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#4C4DDC" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => toggleEdit('password')} style={styles.editButton}>
//             <FontAwesome name="edit" size={20} color="#4C4DDC" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Save Button */}
//       <Button title="Save" onPress={handleSave} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//     flex: 1,
//   },
//   editableContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   editButton: {
//     marginLeft: 10,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   showButton: {
//     marginLeft: 10,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ProfileEditPage;




import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import * as ImagePicker from 'expo-image-picker';

const ProfileEditPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: ''
  });

  const [isEditable, setIsEditable] = useState({
    fullName: false,
    phone: false,
    email: false,
    password: false,
  });

  const [imageUri, setImageUri] = useState(null); // For storing image URI
  const [loading, setLoading] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Fetch token from AsyncStorage and load profile data
  const fetchProfileData = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const response = await fetch(`${API_URL}/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();
        if (data.data) {
          setFormData({
            fullName: data.data.name || 'Not Available',
            phone: data.data.phone || 'Not Available',
            email: data.data.email || 'Not Available',
            password: '', // Do not prefill the password for security reasons
          });
          setImageUri(data.data.Image); // Set the existing image URL
        }
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
      Alert.alert('Error', 'Failed to load profile data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  // Handle input changes
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Toggle edit state for a specific field
  const toggleEdit = (field) => {
    setIsEditable({ ...isEditable, [field]: !isEditable[field] });
  };

  // Handle image picker
  const handleImagePicker = async () => {
    // Request permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }
  
    // Launch the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImageUri(result.uri); // Store image URI for preview
    }
  };
  

  // Handle save action
  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const payload = {
        token,
        FullName: formData.fullName !== 'Not Available' ? formData.fullName : null,
        PhoneNumber: formData.phone !== 'Not Available' ? formData.phone : null,
        Email: formData.email !== 'Not Available' ? formData.email : null,
        Password: formData.password || null, // Send the new password if updated
        Image: imageUri ? imageUri.split(',')[1] : null // Convert image to base64 if available
      };

      const response = await fetch(`${API_URL}/profileUpdate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status === 'true') {
        Alert.alert('Success', 'Profile updated successfully');
      } else {
        Alert.alert('Error', 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Edit Your Profile</Text>

      {/* Profile Image Icon */}
      <View style={styles.imageIconContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <FontAwesome name="user-circle" size={100} color="#ccc" />
        )}
      </View>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.editableContainer}>
          <TextInput
            style={styles.input}
            value={formData.fullName}
            onChangeText={(value) => handleChange('fullName', value)}
            placeholder="Full Name"
            editable={isEditable.fullName}
          />
          <TouchableOpacity onPress={() => toggleEdit('fullName')} style={styles.editButton}>
            <FontAwesome name="edit" size={20} color="#4C4DDC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.editableContainer}>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(value) => handleChange('phone', value)}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            editable={isEditable.phone}
          />
          <TouchableOpacity onPress={() => toggleEdit('phone')} style={styles.editButton}>
            <FontAwesome name="edit" size={20} color="#4C4DDC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.editableContainer}>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            keyboardType="email-address"
            placeholder="Email"
            editable={isEditable.email}
          />
          <TouchableOpacity onPress={() => toggleEdit('email')} style={styles.editButton}>
            <FontAwesome name="edit" size={20} color="#4C4DDC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={(value) => handleChange('password', value)}
            secureTextEntry={!isPasswordVisible}
            placeholder="Password"
            editable={isEditable.password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
            <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#4C4DDC" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleEdit('password')} style={styles.editButton}>
            <FontAwesome name="edit" size={20} color="#4C4DDC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Image Picker */}
      <View style={styles.imagePickerContainer}>
        <Text style={styles.label}>Profile Image</Text>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <Button title="Choose Image" onPress={handleImagePicker} />
      </View>

      {/* Save Button */}
      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  imageIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    flex: 1,
  },
  editableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    padding: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showButton: {
    padding: 10,
  },
  imagePickerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileEditPage;
