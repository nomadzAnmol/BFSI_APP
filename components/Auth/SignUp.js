
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logo from '../../assets/SampleLogo.png'; // Replace with your logo path
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for eye icon

const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Add your login logic here
    };
  
    const handleSignUpNavigation = () => {
        navigation.navigate('LogIn'); // Navigate to the SignUp screen
      };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} />

            {/* Welcome Text */}
            <Text style={styles.welcomeText}>Create Your Account</Text>

            {/* Login Form */}
            <View style={styles.formContainer}>
                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        keyboardType="Name"
                    />
                </View>

                {/* Phone Number */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType="number"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}> Create Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Icon
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={wp('5%')}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}> Confirm Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Enter Password"
                            secureTextEntry={!showPassword}
                        />
                    </View>
                </View>

                {/* Forgot Password Link */}
                <View style={styles.agreementContainer}>
                    <Icon name="checkmark-circle" size={wp('5%')} color="green" style={styles.tickIcon} />
                    <Text style={styles.agreementText}>
                        Hereby, I agree to the Terms & Conditions and Privacy Policy
                    </Text>
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>

                {/* Divider Line */}
                <View style={styles.dividerLine}></View>



                {/* Sign Up Link */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Already have an account? </Text>
                    <TouchableOpacity onPress={handleSignUpNavigation}>
                        <Text style={styles.signUpLink}> Log In</Text>
                    </TouchableOpacity>
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
        marginBottom: hp('2%'),
    },
    welcomeText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: 'black',
        marginBottom: hp('1%'),
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: hp('1%'),
    },
    label: {
        fontSize: wp('4%'),
        fontWeight: '600',
        color: 'black',
        marginBottom: hp('1%'),
    },
    input: {
        width: '100%',
        padding: wp('3%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: wp('3%'),
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
        padding: wp('3%'),
        borderWidth: 0, // Border handled by passwordContainer
        borderColor: 'transparent',
        // borderRadius: wp('5%'),
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
        color: "#007AFF",
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
    agreementContainer: {
    flexDirection: 'row', // Arrange the icon and text in a row
    alignItems: 'center', // Center them vertically
    marginBottom: hp('2%'), // Optional: Add some margin at the bottom if needed
  },
  tickIcon: {
    marginRight: wp('2%'), 
  },
  agreementText: {
    fontSize: wp('4%'),
    color: 'black',
  },
});

export default SignUp;
