// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import TopBar from '../Home/TopBar'; // Adjust the import path as necessary

// const ProductPage = ({ navigation, route }) => {
//   const { keyword } = route.params; // Get the passed keyword

//   // Mock data for cards
//   const cards = [
//     { id: 1, title: 'Card 1', description: 'Description of card 1' },
//     { id: 2, title: 'Card 2', description: 'Description of card 2' },
//     { id: 3, title: 'Card 3', description: 'Description of card 3' },
//   ];

//   return (
//     <View style={styles.container}>
//       <TopBar style={styles.topBar} />
//       <Text style={styles.headingText}>{keyword}</Text>
//       <ScrollView contentContainerStyle={styles.cardsContainer}>
//         {cards.map((card) => (
//           <TouchableOpacity 
//             key={card.id} 
//             style={styles.card} 
//             onPress={() => navigation.navigate('ProductDetailPage', { title: card.title, description: card.description })} // Navigate to ProductDetailPage
//           >
//             <Text style={styles.cardTitle}>{card.title}</Text>
//             <Text style={styles.cardDescription}>{card.description}</Text>
//           </TouchableOpacity>
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
//     marginTop: 50, // Add space below the top of the screen
//   },
//   cardsContainer: {
//     paddingHorizontal: 20,
//   },
//   card: {
//     height: 250,
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


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import TopBar from '../Home/TopBar'; // Adjust the import path as necessary
import { API_URL } from '@env';
import { Image } from 'react-native';

const ProductPage = ({ navigation, route }) => {
  const { SubCategoryId } = route.params; // Get the passed subCategoryId
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle error messages

  // Fetch products from API based on subCategoryId
  const fetchProducts = async () => {
    // console.log("subUID", SubCategoryId);
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ SubCategoryId }), // Send the subCategoryId in the request body
      });

      const data = await response.json();
      if (data.status === 'true') {
        // console.log(" dta--", data);
        setProducts(data.data); // Set the fetched products
      } else {
        setError('Failed to fetch products');
        Alert.alert('Error', 'Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
      Alert.alert('Error', 'Failed to fetch products');
    } finally {
      setLoading(false); // Stop loading when the request is complete
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [SubCategoryId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
  <TopBar style={styles.topBar} />
  <ScrollView contentContainerStyle={styles.cardsContainer}>
    {products.length > 0 ? (
      products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.card}
          onPress={() => navigation.navigate('ProductDetailPage', { ProductId: product.id })} // Navigate to ProductDetailPage
        >
          {/* Add Image before the Title */}
          <Image 
            source={{ uri: product.Image }} 
            style={styles.cardImage} 
            resizeMode="cover" 
          />
          <Text style={styles.cardTitle}>{product.MetaTitle}</Text>
          <Text style={styles.cardDescription}>
            {product.MetaDescription.split(' ').slice(0, 10).join(' ')}...
          </Text>
        </TouchableOpacity>
      ))
    ) : (
      <Text style={styles.noProductsText}>No products found for this subcategory.</Text>
    )}
  </ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',  // Full width of the card
    height: 150,    // Adjust the height as needed
    borderRadius: 10, // Optional: to match the card style
    marginBottom: 10, // Spacing between the image and the title
  },
  loadingText: {
    fontSize: 18,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  noProductsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
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
