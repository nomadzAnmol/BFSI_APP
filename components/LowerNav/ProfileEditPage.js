import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';

const ProfileEditPage = () => {
  // Static data
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    gender: 'Male',
    dob: '1990-01-01',
    phone: '+1234567890',
    email: 'johndoe@example.com',
    location: 'New York',
    password: 'password123'
  });

  // State for password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle input changes
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Handle save action
  const handleSave = () => {
    // Implement save logic here
    console.log('Profile updated:', formData);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Edit Your Profile</Text>
      
      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={formData.fullName}
          onChangeText={(value) => handleChange('fullName', value)}
        />
      </View>
      
      {/* Gender Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={formData.gender}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange('gender', itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      
      {/* Date of Birth Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={formData.dob}
          onChangeText={(value) => handleChange('dob', value)}
          placeholder="YYYY-MM-DD"
        />
      </View>
      
      {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formData.phone}
          onChangeText={(value) => handleChange('phone', value)}
          keyboardType="phone-pad"
        />
      </View>
      
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mail</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(value) => handleChange('email', value)}
          keyboardType="email-address"
        />
      </View>
      
      {/* Location Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={formData.location}
          onChangeText={(value) => handleChange('location', value)}
        />
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
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
            <FontAwesome name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} color="#4C4DDC" />
          </TouchableOpacity>
        </View>
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
    marginTop: 10,
    textAlign: 'center',
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
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showButton: {
    marginLeft: 10,
  },
});

export default ProfileEditPage;


