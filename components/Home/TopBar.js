// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_URL } from '@env'; // Import API URL from .env

// const TopBar = ({ style, showEditButton }) => {
//   const [userData, setUserData] = useState(null); // State to hold user data
//   const navigation = useNavigation();

//   // Function to handle fetching token from AsyncStorage and posting it to the API
//   const fetchUserToken = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       if (token !== null) {
//         // Post the token to the API
//         const response = await fetch(`${API_URL}/profile`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ token }), // Send token in the request body
//         });

//         const data = await response.json();
//         // console.log('API Response:>>', data);

//         if (response.ok && data.status === "true") {
//           // Set user data in state
//           setUserData(data.data);
//         } else {
//           console.log('Failed to fetch user data:', data);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching userToken or posting token:', error);
//     }
//   };

//   // Fetch the token and post it when the component mounts
//   useEffect(() => {
//     fetchUserToken();
//   }, []); // Empty dependency array ensures it only runs once on mount

//   const handleEditPress = () => {
//     navigation.navigate('ProfileEditPage'); // Ensure 'ProfileEditPage' matches the route name
//   };

//   // Fallback values if name or image is null
//   const defaultName = "Anmol Mishra"; // Hardcoded default name
//   const defaultImage = 'https://via.placeholder.com/150'; // Hardcoded default image

//   // Get name and image or fallback to default values
//   const userName = userData?.name ? String(userData.name) : defaultName;
//   const userImage = userData?.Image || defaultImage;

//   // Debug log to ensure we are getting valid data types
//   // console.log("User name:", userName);
//   // console.log("User image:", userImage);

//   return (
//     <View style={[styles.topBar, style]}>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity style={styles.profileButton}>
//           <Image
//             source={{ uri: userImage }} // Use user image or fallback
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
        
//         <Text style={styles.userName}>
//           {userName} {/* Use user name or fallback */}
//         </Text>
//       </View>
//       <View style={styles.actionContainer}>
//         {showEditButton ? (
//           <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
//             <Text style={styles.editText}>Edit</Text>
//           </TouchableOpacity>
//         ) : (
//           <View style={styles.iconContainer}>
//             <TouchableOpacity style={styles.iconButton}>
//               <FontAwesome name="bell" size={24} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <FontAwesome name="heart" size={24} color="black" />
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileButton: {
//     marginRight: 10,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   actionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   editButton: {
//     backgroundColor: '#4C4DDC',
//     padding: 10,
//     borderRadius: 10,
//   },
//   editText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//   },
//   iconButton: {
//     marginLeft: 10,
//   },
// });

// export default TopBar;


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env'; // Import API URL from .env

const TopBar = ({ style, showEditButton }) => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const navigation = useNavigation();

  // Function to handle fetching token from AsyncStorage and posting it to the API
  const fetchUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        // Post the token to the API
        const response = await fetch(`${API_URL}/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }), // Send token in the request body
        });

        const data = await response.json();
        // console.log('API Response:>>', data);

        if (response.ok && data.status === "true") {
          // Set user data in state
          setUserData(data.data);
        } else {
          console.log('Failed to fetch user data:', data);
        }
      }
    } catch (error) {
      console.error('Error fetching userToken or posting token:', error);
    }
  };

  // Fetch the token and post it when the component mounts
  useEffect(() => {
    fetchUserToken();
  }, []); // Empty dependency array ensures it only runs once on mount

  const handleEditPress = () => {
    navigation.navigate('ProfileEditPage'); // Ensure 'ProfileEditPage' matches the route name
  };

  const handleProfilePress = () => {
    navigation.navigate('ProfileEditPage'); // Navigate to 'ProfilePage' when image or name is pressed
  };

  // Fallback values if name or image is null
  const defaultName = "User"; // Hardcoded default name
  const defaultImage = 'https://via.placeholder.com/150'; // Hardcoded default image

  // Get name and image or fallback to default values
  const userName = userData?.name ? String(userData.name) : defaultName;
  const userImage = userData?.Image || defaultImage;

  // Debug log to ensure we are getting valid data types
  // console.log("User name:", userName);
  // console.log("User image:", userImage);

  return (
    <View style={[styles.topBar, style]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
          <Image
            source={{ uri: userImage }} // Use user image or fallback
            style={styles.profileImage}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleProfilePress}>
          <Text style={styles.userName}>
            {userName} {/* Use user name or fallback */}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionContainer}>
        {showEditButton ? (
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="bell" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="heart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#4C4DDC',
    padding: 10,
    borderRadius: 10,
  },
  editText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default TopBar;
