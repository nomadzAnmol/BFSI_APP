// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import TopBar from '../Home/TopBar'; // Adjust the import path as necessary
// import { API_URL } from '@env';
// import { Image } from 'react-native';

// const SubCategory = ({ navigation, route }) => {
//   const { SubCategoryId } = route.params; // Get the passed subCategoryId
//   const [products, setProducts] = useState([]); // State to hold products
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [error, setError] = useState(null); // State to handle error messages

//   // Fetch products from API based on subCategoryId
//   const fetchProducts = async () => {
//     console.log("subcategID-",SubCategoryId)
//     try {
//       const response = await fetch(`${API_URL}/SubCategory`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({CategoryId : SubCategoryId }), // Send the subCategoryId in the request body
//       });

//       const data = await response.json();
//       console.log('API Response data - :', data); // Add console log to see the response

//       if (data.status === 'true') {
//         setProducts(data.data); // Set the fetched products
//       } else {
//         setError('Failed to fetch products');
//         Alert.alert('Error', 'Failed to fetch products');
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setError('Error fetching products');
//       Alert.alert('Error', 'Failed to fetch products');
//     } finally {
//       setLoading(false); // Stop loading when the request is complete
//     }
//   };

//   useEffect(() => {
//     fetchProducts(); // Fetch products when the component mounts
//   }, [SubCategoryId]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <TopBar style={styles.topBar} />
//       <ScrollView contentContainerStyle={styles.cardsContainer}>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <TouchableOpacity
//               key={product.id}
//               style={styles.card}
//               onPress={() => navigation.navigate('ProductDetailPage', { ProductId: product.id })} // Navigate to ProductDetailPage
//             >
//               {product.Image ? (
//                 <Image 
//                   source={{ uri: product.Image }} 
//                   style={styles.cardImage} 
//                   resizeMode="cover" 
//                 />
//               ) : (
//                 <Text>No Image Available</Text>
//               )}
//               <Text style={styles.cardTitle}>{product.MetaTitle}</Text>
//               <Text style={styles.cardDescription}>
//                 {product.MetaDescription.split(' ').slice(0, 10).join(' ')}...
//               </Text>
//             </TouchableOpacity>
//           ))
//         ) : (
//           <Text style={styles.noProductsText}>No products found for this subcategory.</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardImage: {
//     width: '100%',  // Full width of the card
//     height: 150,    // Adjust the height as needed
//     borderRadius: 10, // Optional: to match the card style
//     marginBottom: 10, // Spacing between the image and the title
//   },
//   loadingText: {
//     fontSize: 18,
//     color: '#666',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//   },
//   noProductsText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   topBar: {
//     marginTop: 50, // Add space below the top of the screen
//   },
//   cardsContainer: {
//     paddingHorizontal: 20,
//   },
//   card: {
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

// export default SubCategory;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import TopBar from '../Home/TopBar'; // Adjust the import path as necessary
import { API_URL } from '@env';
import { Image } from 'react-native';

const SubCategory = ({ navigation, route }) => {
  const { SubCategoryId } = route.params; // Get the passed subCategoryId
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle error messages

  // Fetch products from API based on subCategoryId
  const fetchProducts = async () => {
    console.log("subcategID-", SubCategoryId);
    try {
      const response = await fetch(`${API_URL}/SubCategory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CategoryId: SubCategoryId }), // Send the subCategoryId in the request body
      });

      const data = await response.json();
    //   console.log('API Response data - :', data); // Add console log to see the response

      if (data.status === 'true') {
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
            //   onPress={() => navigation.navigate('ProductDetailPage', { ProductId: product.id })} 
               onPress={() => navigation.navigate('ProductPage', { SubCategoryId: product.id })} 
            >
              {/* Render the image if available, otherwise show a placeholder */}
              {product.Image ? (
                <Image 
                  source={{ uri: product.Image }} 
                  style={styles.cardImage} 
                  resizeMode="cover" 
                />
              ) : (
                <Text>No Image Available</Text>
              )}

              {/* Display the Title */}
              <Text style={styles.cardTitle}>
                {product.Title ? product.Title : 'No Title Available'}
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
  cardImage: {
    width: '100%',  // Full width of the card
    height: 150,    // Adjust the height as needed
    borderRadius: 10, // Optional: to match the card style
    marginBottom: 10, // Spacing between the image and the title
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Optional: to center the title text
  },
});

export default SubCategory;
