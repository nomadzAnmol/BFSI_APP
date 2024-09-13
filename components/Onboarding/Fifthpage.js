import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import girlImage from '../../assets/five.png';

const FifthPage = ({ onNextPress }) => {  // Accept the onNextPress prop

  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.header}>
        <Text style={styles.headingText}>Lorems Ipsum 5</Text>
      </View>

      {/* Image in the middle */}
      <View style={styles.imageContainer}>
        <Image source={girlImage} style={styles.image} />
      </View>

      {/* Subheading and text */}
      <View style={styles.subheadingContainer}>
        <Text style={styles.subheadingText}>Subheading</Text>
        <Text style={styles.descriptionText}>
          This is some descriptive text below the subheading. It gives more details about the content or context.
        </Text>
      </View>

      {/* Dotted slider */}
      <View style={styles.sliderContainer}>
        {/* Add your dots here if needed */}
      </View>

      {/* Finish button */}
      <TouchableOpacity style={styles.nextButton} onPress={onNextPress}>
        <Text style={styles.nextButtonText}>Finish</Text>
      </TouchableOpacity>
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
  },
  header: {
    position: 'absolute',
    top: hp('8%'),
    left: wp('8%'),
  },
  headingText: {
    fontSize: wp('8%'),
    color: '#4C4DDC',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('90%'),
    height: hp('40%'),
    resizeMode: 'contain',
  },
  subheadingContainer: {
    alignItems: 'center',
    marginVertical: hp('2%'),
    marginBottom: hp('10%'),
  },
  subheadingText: {
    fontSize: wp('6%'),
    color: '#4C4DDC',
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  descriptionText: {
    fontSize: wp('4%'),
    color: '#333',
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('15%'),
  },
  nextButton: {
    position: 'absolute',
    bottom: hp('5%'),
    width: wp('60%'),
    height: hp('7%'),
    backgroundColor: '#4C4DDC',
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: wp('7%'),
    fontWeight: 'bold',
  },
});

export default FifthPage;



// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import girlImage from '../../assets/five.png';

// const FifthPage = ({ navigation }) => {
//   const handleFinishOnboarding = () => {
//     navigation.navigate('AuthStack', { screen: 'SignUp' });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Heading */}
//       <View style={styles.header}>
//         <Text style={styles.headingText}>Lorems Ipsum 5</Text>
//       </View>

//       {/* Image in the middle */}
//       <View style={styles.imageContainer}>
//         <Image source={girlImage} style={styles.image} />
//       </View>

//       {/* Subheading and text */}
//       <View style={styles.subheadingContainer}>
//         <Text style={styles.subheadingText}>Subheading</Text>
//         <Text style={styles.descriptionText}>
//           This is some descriptive text below the subheading. It gives more details about the content or context.
//         </Text>
//       </View>

//       {/* Dotted slider */}
//       <View style={styles.sliderContainer}>
//         {/* Add your dots here if needed */}
//       </View>

//       {/* Finish button */}
//       <TouchableOpacity style={styles.nextButton} onPress={handleFinishOnboarding}>
//         <Text style={styles.nextButtonText}>Finish</Text>
//       </TouchableOpacity>
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
//   },
//   header: {
//     position: 'absolute',
//     top: hp('8%'),
//     left: wp('8%'),
//   },
//   headingText: {
//     fontSize: wp('8%'),
//     color: '#4C4DDC',
//     fontWeight: 'bold',
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: wp('90%'),
//     height: hp('40%'),
//     resizeMode: 'contain',
//   },
//   subheadingContainer: {
//     alignItems: 'center',
//     marginVertical: hp('2%'),
//     marginBottom: hp('10%'),
//   },
//   subheadingText: {
//     fontSize: wp('6%'),
//     color: '#4C4DDC',
//     fontWeight: 'bold',
//     marginBottom: hp('1%'),
//   },
//   descriptionText: {
//     fontSize: wp('4%'),
//     color: '#333',
//     textAlign: 'center',
//   },
//   sliderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: hp('15%'),
//   },
//   sliderDot: {
//     width: wp('2%'),
//     height: wp('2%'),
//     borderRadius: wp('1%'),
//     backgroundColor: '#ccc',
//     marginHorizontal: wp('1%'),
//   },
//   sliderDotActive: {
//     width: wp('6%'),
//     height: wp('2%'),
//     borderRadius: wp('1%'),
//     backgroundColor: '#4C4DDC',
//     marginHorizontal: wp('1%'),
//   },
//   nextButton: {
//     position: 'absolute',
//     bottom: hp('5%'),
//     width: wp('60%'),
//     height: hp('7%'),
//     backgroundColor: '#4C4DDC',
//     borderRadius: wp('5%'),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   nextButtonText: {
//     color: '#fff',
//     fontSize: wp('7%'),
//     fontWeight: 'bold',
//   },
// });

// export default FifthPage;
