import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import logo from '../../assets/LogoGoCap1.png';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Button, Dialog, Portal, PaperProvider, Text as PaperText } from 'react-native-paper'; 
import { API_URL } from '@env';

const SignUp = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [dialogVisible, setDialogVisible] = useState(false); 
    const [dialogMessage, setDialogMessage] = useState(''); 
    const [dialogTitle, setDialogTitle] = useState(''); 

    const validateForm = () => {
        if (!fullName) {
            showDialog('Validation Error', 'Please enter your full name.', true);
            return false;
        }
        if (!phoneNumber || phoneNumber.length !== 10) {
            showDialog('Validation Error', 'Phone number must be 10 digits.', true);
            return false;
        }
        if (!password || password !== confirmPassword) {
            showDialog('Validation Error', 'Passwords do not match.', true);
            return false;
        }
        return true;
    };

    const showDialog = (title, message, resetForm = false) => {
        setDialogTitle(title);
        setDialogMessage(message);
        setDialogVisible(true);

        if (resetForm) {
            setFullName('');
            setPhoneNumber('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    const hideDialog = () => setDialogVisible(false);

    const handleSignUp = async () => {
        if (!validateForm()) return;

        setLoading(true); 

        const data = {
            FullName: fullName,
            PhoneNumber: phoneNumber,
            Password: password,
            ConfirmPassword: confirmPassword
        };

        try {
            const response = await fetch(`${API_URL}/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            setLoading(false); 

            if (response.ok && result.status === "true") {
                await AsyncStorage.setItem('userToken', result.token);
                showDialog('Success', result.message);

                setTimeout(() => {
                    hideDialog();
                    // navigation.navigate('OtpVerification');
                    navigation.navigate('OtpVerification', { phoneNumber });
                }, 2000);
            } else {
                showDialog('Error', result.message || 'Something went wrong.', true);
            }
        } catch (error) {
            setLoading(false); 
            showDialog('Error', 'Failed to register. Please try again later.', true);
        }
    };

    return (
        <PaperProvider>
            <View style={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />

                <Text style={styles.welcomeText}>Create Your Account</Text>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            keyboardType="numeric"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Create Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
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

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Confirm Password"
                                secureTextEntry={!showPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                    </View>

                    <View style={styles.agreementContainer}>
                        <Icon name="checkmark-circle" size={wp('5%')} color="green" style={styles.tickIcon} />
                        <Text style={styles.agreementText}>
                            Hereby, I agree to the Terms & Conditions and Privacy Policy
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleSignUp} disabled={loading}>
                        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Register</Text>}
                    </TouchableOpacity>

                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                            <Text style={styles.signUpLink}>Log In</Text>
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
    },
    eyeIcon: {
        paddingHorizontal: wp('2%'),
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
    agreementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'),
    },
    tickIcon: {
        marginRight: wp('2%'),
    },
    agreementText: {
        fontSize: wp('4%'),
        color: 'black',
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

export default SignUp;
