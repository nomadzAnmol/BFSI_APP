// import React, { useState } from 'react';
// import { View, StyleSheet, Text, Switch, TouchableOpacity, Alert } from 'react-native';
// import TopBar from '../Home/TopBar'; // Adjust the path if necessary
// import { MaterialIcons } from '@expo/vector-icons'; // For Notification icon
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// const Profile = () => {
//   const [isNotificationOn, setIsNotificationOn] = useState(false);
//   const navigation = useNavigation(); // Initialize navigation hook

//   const toggleNotification = () => {
//     setIsNotificationOn(!isNotificationOn);
//   };

//   const navigateToHelp = () => {
//     navigation.navigate('HelpPage'); // Navigate to HelpPage
//   };

//   const confirmLogOut = () => {
//     Alert.alert(
//       'Log Out',
//       'Are you sure you want to log out?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'Log Out', onPress: handleLogout }, // Call handleLogout on press
//       ],
//       { cancelable: false }
//     );
//   };
//   const handleLogout = async () => {
//     try {
//         // Remove only the token, not the onboarding flag
//         await AsyncStorage.removeItem('userToken');
//         // await AsyncStorage.removeItem('hasCompletedOnboarding');
//         // Navigate back to the AuthStack (login screen)
//         navigation.replace('AuthStack'); // Make sure this matches your navigation stack
//     } catch (error) {
//         console.error('Error logging out:', error);
//     }
// };

//   return (
//     <View style={styles.container}>
//       {/* Profile Heading */}
//       <View style={styles.headingContainer}>
//         <Text style={styles.headingText}>Profile</Text>
//       </View>

//       {/* Add TopBar with the edit button */}
//       <TopBar style={styles.topBar} showEditButton={true} />
      
//       {/* Notification Card */}
//       <View style={styles.card}>
//         <Text style={styles.cardHeading}>Notification</Text>

//         {/* Notification Icon and Switch in a single row */}
//         <View style={styles.switchContainer}>
//           <MaterialIcons name="notifications" size={30} color="#4C4DDC" style={styles.icon} />
//           <Text style={styles.switchLabel}>Turn Notifications {isNotificationOn ? 'Off' : 'On'}</Text>
//           <Switch
//             value={isNotificationOn}
//             onValueChange={toggleNotification}
//             thumbColor={isNotificationOn ? '#4caf50' : '#f44336'}
//           />
//         </View>
//       </View>

//       {/* Other Card */}
//       <View style={styles.card}>
//         <Text style={styles.cardHeading}>Others</Text>

//         {/* Other options arranged row-wise */}
//         <View style={styles.otherContainer}>
//           <TouchableOpacity style={styles.row} onPress={navigateToHelp}>
//             <MaterialIcons name="help" size={30} color="#4C4DDC" style={styles.icon} />
//             <Text style={styles.iconLabel}>Help</Text>
//             <MaterialIcons name="arrow-forward-ios" size={24} color="#4C4DDC" style={styles.arrowIcon} />
//           </TouchableOpacity>
//           <View style={styles.row}>
//             <MaterialIcons name="group-add" size={30} color="#4C4DDC" style={styles.icon} />
//             <Text style={styles.iconLabel}>Invite Others</Text>
//             <MaterialIcons name="arrow-forward-ios" size={24} color="#4C4DDC" style={styles.arrowIcon} />
//           </View>
//           <TouchableOpacity style={styles.row} onPress={confirmLogOut}>
//             <MaterialIcons name="logout" size={30} color="#4C4DDC" style={styles.icon} />
//             <Text style={styles.iconLabel}>Log Out</Text>
//             <MaterialIcons name="arrow-forward-ios" size={24} color="#4C4DDC" style={styles.arrowIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   headingContainer: {
//     marginTop: 50, // Adjust top margin for the heading
//     paddingHorizontal: 20,
//     marginBottom: 10, // Space between heading and TopBar
//   },
//   headingText: {
//     fontSize: 24, // Font size for the heading
//     fontWeight: 'bold', // Bold text for heading
//     textAlign: 'center', // Center align the heading
//   },
//   topBar: {
//     paddingHorizontal: 20,
//     marginBottom: 20, // Space between TopBar and Profile content
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5, // Shadow for Android
//   },
//   cardHeading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   switchContainer: {
//     flexDirection: 'row', // Place items in a row
//     alignItems: 'center', // Vertically center items
//     justifyContent: 'space-between', // Space between icon and switch
//   },
//   otherContainer: {
//     flexDirection: 'column', // Ensure rows are stacked vertically
//   },
//   row: {
//     flexDirection: 'row', // Arrange icon, text, and arrow in a row
//     alignItems: 'center',
//     justifyContent: 'space-between', // Add spacing between content
//     marginBottom: 10, // Space between each row
//   },
//   icon: {
//     marginRight: 10, // Space between icon and text
//   },
//   iconLabel: {
//     fontSize: 16,
//     flex: 1, // Allow label to take the remaining space
//   },
//   arrowIcon: {
//     marginLeft: 10, // Space between text and arrow icon
//   },
// });

// export default Profile;

import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import TopBar from '../Home/TopBar'; // Adjust the path if necessary
import { MaterialIcons } from '@expo/vector-icons'; // For Notification icon
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { Provider, Dialog, Portal, Button, Snackbar } from 'react-native-paper'; // Import react-native-paper components

const Profile = () => {
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false); // State for dialog visibility
  const [snackbarVisible, setSnackbarVisible] = useState(false); // State for snackbar visibility
  const navigation = useNavigation(); // Initialize navigation hook

  const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);
    setSnackbarVisible(true); // Show snackbar when toggling notifications
  };

  const navigateToHelp = () => {
    navigation.navigate('HelpPage'); // Navigate to HelpPage
  };

  const confirmLogOut = () => {
    setIsDialogVisible(true); // Show the logout confirmation dialog
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.replace('AuthStack'); // Navigate to the login screen
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsDialogVisible(false); // Hide dialog after logout
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        {/* Profile Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Profile</Text>
        </View>

        {/* Add TopBar with the edit button */}
        <TopBar style={styles.topBar} showEditButton={true} />

        {/* Notification Card */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>Notification</Text>

          {/* Notification Icon and Switch in a single row */}
          <View style={styles.switchContainer}>
            <MaterialIcons name="notifications" size={30} color="#4C4DDC" style={styles.icon} />
            <Text style={styles.switchLabel}>Turn Notifications {isNotificationOn ? 'Off' : 'On'}</Text>
            <Switch
              value={isNotificationOn}
              onValueChange={toggleNotification}
              thumbColor={isNotificationOn ? '#4caf50' : '#f44336'}
            />
          </View>
        </View>

        {/* Other Card */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>Others</Text>

          {/* Other options arranged row-wise */}
          <View style={styles.otherContainer}>
            <TouchableOpacity style={styles.row} onPress={navigateToHelp}>
              <MaterialIcons name="help" size={30} color="#4C4DDC" style={styles.icon} />
              <Text style={styles.iconLabel}>Help</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="#4C4DDC" style={styles.arrowIcon} />
            </TouchableOpacity>
            <View style={styles.row}>
              <MaterialIcons name="group-add" size={30} color="#4C4DDC" style={styles.icon} />
              <Text style={styles.iconLabel}>Invite Others</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="#4C4DDC" style={styles.arrowIcon} />
            </View>
            <TouchableOpacity style={styles.row} onPress={confirmLogOut}>
              <MaterialIcons name="logout" size={30} color="#4C4DDC" style={styles.icon} />
              <Text style={styles.iconLabel}>Log Out</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="#4C4DDC" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Confirmation Dialog */}
        <Portal>
          <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
            <Dialog.Title>Log Out</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to log out?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
              <Button onPress={handleLogout}>Log Out</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        {/* Snackbar for Notification Toggle */}
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
        >
          Notifications {isNotificationOn ? 'enabled' : 'disabled'}
        </Snackbar>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headingContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBar: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  iconLabel: {
    fontSize: 16,
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default Profile;
