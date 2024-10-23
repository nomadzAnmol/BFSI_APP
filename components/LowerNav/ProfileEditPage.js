// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_URL } from '@env';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system'; // Import expo-file-system for base64 conversion

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

//   const [imageUri, setImageUri] = useState(null); // For storing image URI or base64 string
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
//         console.log("dataa--, ",data);
//         if (data.data) {
//           setFormData({
//             fullName: data.data.name || 'Not Available',
//             phone: data.data.phone || 'Not Available',
//             email: data.data.email || 'Not Available',
//             password: '', // Do not prefill the password for security reasons
//           });
//           setImageUri(data.data.Image); // Set the existing image URL or base64 data
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

//   // Handle image picker
//   const handleImagePicker = async () => {
//     // Request permission to access the media library
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       Alert.alert('Permission to access camera roll is required!');
//       return;
//     }

//     // Launch the image library
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImageUri(result.uri); // Store image URI for preview

//       // Convert the image to base64
//       const base64Image = await FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.Base64 });
//       setImageUri(`data:image/jpeg;base64,${base64Image}`); // Store base64-encoded image
//     }
//   };

//   // Handle save action
//   const handleSave = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const payload = {
//         token,
//         FullName: formData.fullName !== 'Not Available' ? formData.fullName : null,
//         PhoneNumber: formData.phone !== 'Not Available' ? formData.phone : null,
//         Email: formData.email !== 'Not Available' ? formData.email : null,
//         Password: formData.password || null, // Send the new password if updated
//         Image: imageUri ? imageUri.split(',')[1] : null // Use base64 string without 'data:image/jpeg;base64,'
//       };

//       // Log the payload to the console
//       console.log('Data being sent:', payload);

//       const response = await fetch(`${API_URL}/profileUpdate`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();
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

//       {/* Profile Image Icon */}
//       <View style={styles.imageIconContainer}>
//         {imageUri ? (
//           <Image source={{ uri: imageUri }} style={styles.image} />
//         ) : (
//           <FontAwesome name="user-circle" size={100} color="#ccc" />
//         )}
//       </View>

//       {/* Full Name Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <View style={styles.editableContainer}>
//           <TextInput
//             style={styles.input}
//             value={formData.fullName}
//             onChangeText={(value) => handleChange('fullName', value)}
//             placeholder="Full Name"
//             editable={isEditable.fullName}
//           />
//           {isEditable.fullName && (
//             <TouchableOpacity onPress={() => toggleEdit('fullName')} style={styles.editButton}>
//               <FontAwesome name="check" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
//           {!isEditable.fullName && (
//             <TouchableOpacity onPress={() => toggleEdit('fullName')} style={styles.editButton}>
//               <FontAwesome name="edit" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
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
//             editable={isEditable.phone}
//           />
//           {isEditable.phone && (
//             <TouchableOpacity onPress={() => toggleEdit('phone')} style={styles.editButton}>
//               <FontAwesome name="check" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
//           {!isEditable.phone && (
//             <TouchableOpacity onPress={() => toggleEdit('phone')} style={styles.editButton}>
//               <FontAwesome name="edit" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
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
//             editable={isEditable.email}
//           />
//           {isEditable.email && (
//             <TouchableOpacity onPress={() => toggleEdit('email')} style={styles.editButton}>
//               <FontAwesome name="check" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
//           {!isEditable.email && (
//             <TouchableOpacity onPress={() => toggleEdit('email')} style={styles.editButton}>
//               <FontAwesome name="edit" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
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
//             editable={isEditable.password}
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
//             <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#4C4DDC" />
//           </TouchableOpacity>
//           {isEditable.password && (
//             <TouchableOpacity onPress={() => toggleEdit('password')} style={styles.editButton}>
//               <FontAwesome name="check" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
//           {!isEditable.password && (
//             <TouchableOpacity onPress={() => toggleEdit('password')} style={styles.editButton}>
//               <FontAwesome name="edit" size={20} color="#fff" />
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>

//       {/* Image Picker Button */}
//       <View style={styles.imagePickerContainer}>
//         <Button title="Pick an Image" onPress={handleImagePicker} color="#4C4DDC" />
//       </View>

//       {/* Save Button */}
//       <View style={styles.saveButtonContainer}>
//         <Button title="Save" onPress={handleSave} color="#4C4DDC" />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   imageIconContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: '500',
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   editableContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '80%', // Keep this width to match the input field
//   },
//   showButton: {
//     padding: 10,
//   },
//   editButton: {
//     backgroundColor: '#4C4DDC',
//     padding: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   imagePickerContainer: {
//     marginVertical: 20,
//     alignItems: 'center',
//   },
//   saveButtonContainer: {
//     marginTop: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ProfileEditPage;




import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

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

  const [imageUri, setImageUri] = useState(null); // For storing image URI or base64 string
  const [loading, setLoading] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Fetch token and load profile data
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
        // console.log("data--", data);
        if (data.data) {
          setFormData({
            fullName: data.data.name || 'Not Available',
            phone: data.data.phone || 'Not Available',
            email: data.data.email || 'Not Available',
            password: '', // Do not prefill password
          });
          setImageUri(data.data.Image); // Set existing image
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

  const handleImagePicker = async () => {
    Alert.alert(
      'Select Image Source',
      'Choose an image from the gallery or take a photo with the camera',
      [
        {
          text: 'Camera',
          onPress: async () => openCamera(),
        },
        {
          text: 'Gallery',
          onPress: async () => openGallery(),
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };
  
  // Function to open the camera
  // const openCamera = async () => {
  //   const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
  
  //   if (cameraPermission.status !== 'granted') {
  //     Alert.alert('Permission to access camera is required!');
  //     return;
  //   }
  
  //   const result = await ImagePicker.launchCameraAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  
  //   if (!result.canceled) {
  //     setImageUri(result.uri); // Store image URI for preview
  
  //     // Convert the image to base64
  //     const base64Image = await FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.Base64 });
  //     setImageUri(`data:image/jpeg;base64,${base64Image}`); // Store base64-encoded image
  //   }
  // };
  
  // Function to open the gallery
  // const openGallery = async () => {
  //   const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
  //   if (mediaPermission.status !== 'granted') {
  //     Alert.alert('Permission to access media library is required!');
  //     return;
  //   }
  
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  
  //   if (!result.canceled) {
  //     setImageUri(result.uri); // Store image URI for preview
  
  //     // Convert the image to base64
  //     const base64Image = await FileSystem.readAsStringAsync(result.uri, { encoding: FileSystem.EncodingType.Base64 });
  //     setImageUri(`data:image/jpeg;base64,${base64Image}`); // Store base64-encoded image
  //   }
  // };

  const openCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
  
    if (cameraPermission.status !== 'granted') {
        Alert.alert('Permission to access camera is required!');
        return;
    }
  
    const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri; // Get the first image uri
        setImageUri(imageUri); // Store image URI for preview

        // Convert the image to base64
        const base64Image = await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 });
        setImageUri(`data:image/jpeg;base64,${base64Image}`); // Store base64-encoded image
    } else {
        Alert.alert('No image selected.');
    }
};
  
// Function to open the gallery
const openGallery = async () => {
    const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (mediaPermission.status !== 'granted') {
        Alert.alert('Permission to access media library is required!');
        return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri; // Get the first image uri
        setImageUri(imageUri); // Store image URI for preview

        // Convert the image to base64
        const base64Image = await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 });
        setImageUri(`data:image/jpeg;base64,${base64Image}`); // Store base64-encoded image
    } else {
        Alert.alert('No image selected.');
    }
};
  


  // Handle save action
  // const handleSave = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('userToken');
  //     const payload = {
  //       token,
  //       FullName: formData.fullName !== 'Not Available' ? formData.fullName : null,
  //       PhoneNumber: formData.phone !== 'Not Available' ? formData.phone : null,
  //       Email: formData.email !== 'Not Available' ? formData.email : null,
  //       Password: formData.password || null, // Send the new password if updated
  //       Image: imageUri ? imageUri.split(',')[1] : null // Use base64 string without 'data:image/jpeg;base64,'
  //     };
      
  //     // console.log("payload-",payload)

  //     const response = await fetch(`${API_URL}/profileUpdate`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const result = await response.json();
  //     console.log("Request data:", JSON.stringify(result.data.request, null, 2));
  //     if (result.status === 'true') {
  //       Alert.alert('Success', 'Profile updated successfully');
  //     } else {
  //       Alert.alert('Error', 'Failed to update profile');
  //     }
  //   } catch (error) {
  //     console.error('Error updating profile:', error);
  //     Alert.alert('Error', 'Failed to update profile');
  //   }
  // };

//   const handleSave = async () => {
//     try {
//         const token = await AsyncStorage.getItem('userToken');
//         const payload = {
//             token,
//             FullName: formData.fullName !== 'Not Available' ? formData.fullName : null,
//             PhoneNumber: formData.phone !== 'Not Available' ? formData.phone : null,
//             Email: formData.email !== 'Not Available' ? formData.email : null,
//             Password: formData.password || null,
//             Image: imageUri ? imageUri.split(',')[1] : null // Use base64 string without 'data:image/jpeg;base64,'
//         };
        
//         console.log("payload-", payload);

//         const response = await fetch(`${API_URL}/profileUpdate`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });

//         if (!response.ok) {
//             const errorText = await response.text(); // Get the raw response
//             console.error("Error response:", errorText); // Log the error response
//             throw new Error('Failed to update profile');
//         }

//         const result = await response.json();
//         console.log("Request data:", JSON.stringify(result.data.request, null, 2));
        
//         if (result.status === 'true') {
//             Alert.alert('Success', 'Profile updated successfully');
//         } else {
//             Alert.alert('Error', 'Failed to update profile');
//         }
//     } catch (error) {
//         console.error('Error updating profile:', error);
//         Alert.alert('Error', 'Failed to update profile');
//     }
// };

const handleSave = async () => {
  try {
      const token = await AsyncStorage.getItem('userToken');
      const payload = {
          token,
          FullName: formData.fullName !== 'Not Available' ? formData.fullName : null,
          PhoneNumber: formData.phone !== 'Not Available' ? formData.phone : null,
          Email: formData.email !== 'Not Available' ? formData.email : null,
          Password: formData.password || null,
          Image: imageUri ? imageUri.split(',')[1] : null // Use base64 string without 'data:image/jpeg;base64,'
      };

      console.log("payload-", payload);

      const response = await fetch(`${API_URL}/profileUpdate`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      });

      if (!response.ok) {
          const errorText = await response.text(); // Get the raw response
          console.error("Error response:", errorText); // Log the error response
          throw new Error('Failed to update profile');
      }

      const result = await response.json();
      console.log("Full response data:", result); // Log the entire response for inspection

      // Ensure you check the actual structure of the result
      if (result.data && result.data.request) {
          console.log("Request data:", JSON.stringify(result.data.request, null, 2));
      } else {
          console.warn("Result structure not as expected:", result);
      }

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
      <Text style={styles.heading}>Edit Profile</Text>

      {/* Profile Image with Camera Icon */}
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <FontAwesome name="user-circle" size={100} color="#ccc" />
        )}
        <TouchableOpacity style={styles.cameraIcon} onPress={handleImagePicker}>
          <FontAwesome name="camera" size={24} color="#fff" />
        </TouchableOpacity>
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
            <FontAwesome name={isEditable.fullName ? "check" : "edit"} size={20} color="#fff" />
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
            <FontAwesome name={isEditable.phone ? "check" : "edit"} size={20} color="#fff" />
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
            <FontAwesome name={isEditable.email ? "check" : "edit"} size={20} color="#fff" />
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
            placeholder="*******" // Placeholder with '*'
            editable={isEditable.password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
            <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#4C4DDC" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleEdit('password')} style={styles.editButton}>
            <FontAwesome name={isEditable.password ? "check" : "edit"} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Save Button */}
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: '#4C4DDC',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',  // Shadow color
    textShadowOffset: { width: 2, height: 2 },  // Shadow offset
    textShadowRadius: 5,  // Shadow blur
  }
,
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    right: 130,
    bottom: 0,
    backgroundColor: '#4C4DDC',
    borderRadius: 10,
    padding: 5,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color:'#4C4DDC',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  editableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#4C4DDC',
    padding: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showButton: {
    marginLeft: 10,
  },
  saveButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#4C4DDC',
    padding: 15,
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileEditPage;
