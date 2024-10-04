// import React, { useState } from 'react';
// import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
// import TopBar from '../Home/TopBar'; // Adjust the path if necessary
// import { MaterialIcons } from '@expo/vector-icons'; // For Notification icon
// import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// const Profile = () => {
//   const [isNotificationOn, setIsNotificationOn] = useState(false);
//   const navigation = useNavigation(); // Initialize navigation hook

//   const toggleNotification = () => {
//     setIsNotificationOn(!isNotificationOn);
//   };

//   const navigateToHelp = () => {
//     navigation.navigate('HelpPage'); // Navigate to HelpPage
//   };

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
//           <View style={styles.row}>
//             <MaterialIcons name="logout" size={30} color="#4C4DDC" style={styles.icon} />
//             <Text style={styles.iconLabel}>Log Out</Text>
//           </View>
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

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken'); // Clear token
//       // Optionally clear onboarding flag if needed
//       await AsyncStorage.removeItem('hasCompletedOnboarding');
//       navigation.navigate('AuthStack',{screen:'LogIn'}); // Navigate to AuthStack after logout
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const confirmLogOut = () => {
//     Alert.alert(
//       'Log Out',
//       'Are you sure you want to log out?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'Log Out', onPress: handleLogOut },
//       ],
//       { cancelable: false }
//     );
//   };

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
import { View, StyleSheet, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import TopBar from '../Home/TopBar'; // Adjust the path if necessary
import { MaterialIcons } from '@expo/vector-icons'; // For Notification icon
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Profile = () => {
  const [isNotificationOn, setIsNotificationOn] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);
  };

  const navigateToHelp = () => {
    navigation.navigate('HelpPage'); // Navigate to HelpPage
  };

  const confirmLogOut = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', onPress: handleLogout }, // Call handleLogout on press
      ],
      { cancelable: false }
    );
  };
  
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); // Clear token
      await AsyncStorage.removeItem('hasCompletedOnboarding'); // Optionally clear onboarding flag if needed
      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }], // Reset navigation to AuthStack
      });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headingContainer: {
    marginTop: 50, // Adjust top margin for the heading
    paddingHorizontal: 20,
    marginBottom: 10, // Space between heading and TopBar
  },
  headingText: {
    fontSize: 24, // Font size for the heading
    fontWeight: 'bold', // Bold text for heading
    textAlign: 'center', // Center align the heading
  },
  topBar: {
    paddingHorizontal: 20,
    marginBottom: 20, // Space between TopBar and Profile content
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
    elevation: 5, // Shadow for Android
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row', // Place items in a row
    alignItems: 'center', // Vertically center items
    justifyContent: 'space-between', // Space between icon and switch
  },
  otherContainer: {
    flexDirection: 'column', // Ensure rows are stacked vertically
  },
  row: {
    flexDirection: 'row', // Arrange icon, text, and arrow in a row
    alignItems: 'center',
    justifyContent: 'space-between', // Add spacing between content
    marginBottom: 10, // Space between each row
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  iconLabel: {
    fontSize: 16,
    flex: 1, // Allow label to take the remaining space
  },
  arrowIcon: {
    marginLeft: 10, // Space between text and arrow icon
  },
});

export default Profile;
