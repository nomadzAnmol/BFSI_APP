// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const TopBar = ({ style, showEditButton }) => {
//   const navigation = useNavigation();

//   return (
//     <View style={[styles.topBar, style]}>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity style={styles.profileButton}>
//           <Image
//             source={{ uri: 'https://via.placeholder.com/150' }}
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
//         <Text style={styles.userName}>Anmol Mishra</Text>
//       </View>
//       <View style={styles.actionContainer}>
//         {showEditButton ? (
//           <TouchableOpacity style={styles.editButton}>
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

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ style, showEditButton }) => {
  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('ProfileEditPage'); // Ensure 'ProfileEditPage' matches the route name
  };

  return (
    <View style={[styles.topBar, style]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.userName}>Anmol Mishra</Text>
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
