// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import TopBar from '../Home/TopBar'; // Adjust the import path as necessary

// const ProductPage = ({ route }) => {
//   const { keyword } = route.params; // Get the passed keyword

//   // Mock data for cards
//   const cards = [
//     { id: 1, title: 'Card 1', description: 'Description of card 1' },
//     { id: 2, title: 'Card 2', description: 'Description of card 2' },
//     { id: 3, title: 'Card 3', description: 'Description of card 3' },
//   ];

//   return (
//     <View style={styles.container}>
//        <TopBar style={styles.topBar} />
//       <Text style={styles.headingText}>{keyword}</Text>
//       <ScrollView contentContainerStyle={styles.cardsContainer}>
//         {cards.map((card) => (
//           <View key={card.id} style={styles.card}>
//             <Text style={styles.cardTitle}>{card.title}</Text>
//             <Text style={styles.cardDescription}>{card.description}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//     marginBottom: 10, // Space between the keyword and the cards
//   },
//   topBar: {
//         marginTop: 50, // Add space below the top of the screen
//       },
//   cardsContainer: {
//     paddingHorizontal: 20,
//   },
//   card: {
//     height:250,
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 10,
//     elevation: 3, // Shadow for Android
//     shadowColor: '#000', // Shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cardDescription: {
//     fontSize: 14,
//     marginTop: 5,
//     color: '#666',
//   },
// });

// export default ProductPage;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TopBar from '../Home/TopBar'; // Adjust the import path as necessary

const ProductPage = ({ navigation, route }) => {
  const { keyword } = route.params; // Get the passed keyword

  // Mock data for cards
  const cards = [
    { id: 1, title: 'Card 1', description: 'Description of card 1' },
    { id: 2, title: 'Card 2', description: 'Description of card 2' },
    { id: 3, title: 'Card 3', description: 'Description of card 3' },
  ];

  return (
    <View style={styles.container}>
      <TopBar style={styles.topBar} />
      <Text style={styles.headingText}>{keyword}</Text>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity 
            key={card.id} 
            style={styles.card} 
            onPress={() => navigation.navigate('ProductDetailPage', { title: card.title, description: card.description })} // Navigate to ProductDetailPage
          >
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10, // Space between the keyword and the cards
  },
  topBar: {
    marginTop: 50, // Add space below the top of the screen
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
  card: {
    height: 250,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
});

export default ProductPage;
