// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';
// import { Button, Card, Title, List } from 'react-native-paper';
// import HTMLView from 'react-native-htmlview';
// import { API_URL } from '@env';

// const { width } = Dimensions.get('window'); // Get the screen width

// const ProductDetailPage = ({ route }) => {
//   const { ProductId } = route.params;
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('Eligibility');

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`${API_URL}/ProductDetailsPage`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ProductId }),
//       });

//       const contentType = response.headers.get('content-type');

//       if (!response.ok) {
//         throw new Error(`Server Error: ${response.status}`);
//       }

//       if (contentType && contentType.includes('application/json')) {
//         const data = await response.json();
//         if (data.status === 'true') {
//           console.log("data->",data.data);
//           setProduct(data.data);
//         }
//       } else {
//         const text = await response.text();
//         console.error('Expected JSON but got:', text);
//       }
//     } catch (error) {
//       console.error('Error fetching product details:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [ProductId]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Product details not found.</Text>
//       </View>
//     );
//   }

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'Eligibility':
//         return <HTMLView value={product.EligibilityCriteria} stylesheet={styles.html} />;
//       case 'Documentation':
//         return <HTMLView value={product.documention} stylesheet={styles.html} />;
//       case 'Charges':
//         return <HTMLView value={product.Charges} stylesheet={styles.html} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {product.MainImage && (
//         <Image source={{ uri: product.MainImage }} style={styles.productImage} 
//            resizeMode="contain" // Maintain aspect ratio
//         />
//       )}

//       <Title style={styles.title}>{product.MetaTitle}</Title>
//       <Text style={styles.description}>{product.MetaDescription}</Text>

//       <View style={styles.tabContainer}>
//         <Button
//           mode={activeTab === 'Eligibility' ? 'contained' : 'outlined'}
//           onPress={() => setActiveTab('Eligibility')}
//           style={styles.tabButton}
//         >
//           Eligibility
//         </Button>
//         <Button
//           mode={activeTab === 'Documentation' ? 'contained' : 'outlined'}
//           onPress={() => setActiveTab('Documentation')}
//           style={styles.tabButton}
//         >
//           Documentation
//         </Button>
//         <Button
//           mode={activeTab === 'Charges' ? 'contained' : 'outlined'}
//           onPress={() => setActiveTab('Charges')}
//           style={styles.tabButton}
//         >
//           Charges
//         </Button>
//       </View>

//       <Card style={styles.card}>
//         {renderTabContent()}
//       </Card>

//       <Card style={styles.longDescriptionCard}>
//         <HTMLView value={product.LongDescription} stylesheet={styles.html} />
//       </Card>

//       <View style={styles.faqSection}>
//         <Text style>FAQ</Text>
//         {product.fAQ.map((faq, index) => (
//           <List.Accordion
//             key={index}
//             title={faq[0]}
//             left={props => <List.Icon {...props} icon="help-circle" />}
//           >
//             <Text style={styles.faqContent}>{faq[1]}</Text>
//           </List.Accordion>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 5,
//     margin: 2,
//     backgroundColor: '#fff',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   productImage: {
//     width: '100%',
//     height: 250,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tabButton: {
//     flex: 1,
//     marginHorizontal: 2,
   
//   },
//   card: {
//     padding: 5,
//     marginBottom: 20,
//   },
//   longDescriptionCard: {
//     marginBottom: 20,
//   },
//   faqSection: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   faqContent: {
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     textAlign: 'center',
//   },
//   html: {
//     p: {
//       fontSize: 16,
//       lineHeight: 20,
//     },
//     // Add other styles for HTML elements as needed
//   },
// });

// export default ProductDetailPage;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions, Linking } from 'react-native';
// import { Button, Card, Title, List } from 'react-native-paper';
// import HTMLView from 'react-native-htmlview';
// import { API_URL } from '@env';

// const { width, height } = Dimensions.get('window'); // Get the screen dimensions

// const ProductDetailPage = ({ route }) => {
//   const { ProductId } = route.params;
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState('Eligibility');

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`${API_URL}/ProductDetailsPage`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ProductId }),
//       });

//       const contentType = response.headers.get('content-type');

//       if (!response.ok) {
//         throw new Error(`Server Error: ${response.status}`);
//       }

//       if (contentType && contentType.includes('application/json')) {
//         const data = await response.json();
//         if (data.status === 'true') {
//           console.log("data->", data.data);
//           setProduct(data.data);
//         }
//       } else {
//         const text = await response.text();
//         console.error('Expected JSON but got:', text);
//       }
//     } catch (error) {
//       console.error('Error fetching product details:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [ProductId]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Product details not found.</Text>
//       </View>
//     );
//   }

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'Eligibility':
//         return <HTMLView value={product.EligibilityCriteria} stylesheet={styles.html} />;
//       case 'Documentation':
//         return <HTMLView value={product.documention} stylesheet={styles.html} />;
//       case 'Charges':
//         return <HTMLView value={product.Charges} stylesheet={styles.html} />;
//       default:
//         return null;
//     }
//   };

//   const handleRedirect = () => {
//     if (product?.RedirectLink) {
//       Linking.openURL(product.RedirectLink).catch(err => console.error('Error opening link:', err));
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView style={styles.container}>
//         {product.MainImage && (
//           <Image
//             source={{ uri: product.MainImage }}
//             style={styles.productImage}
//             resizeMode="contain" // Maintain aspect ratio
//           />
//         )}

//         <Title style={styles.title}>{product.MetaTitle}</Title>
//         <Text style={styles.description}>{product.MetaDescription}</Text>

//         <View style={styles.tabContainer}>
//           <Button
//             mode={activeTab === 'Eligibility' ? 'contained' : 'outlined'}
//             onPress={() => setActiveTab('Eligibility')}
//             style={styles.tabButton}
//           >
//             Eligibility
//           </Button>
//           <Button
//             mode={activeTab === 'Documentation' ? 'contained' : 'outlined'}
//             onPress={() => setActiveTab('Documentation')}
//             style={styles.tabButton}
//           >
//             Documentation
//           </Button>
//           <Button
//             mode={activeTab === 'Charges' ? 'contained' : 'outlined'}
//             onPress={() => setActiveTab('Charges')}
//             style={styles.tabButton}
//           >
//             Charges
//           </Button>
//         </View>

//         <Card style={styles.card}>{renderTabContent()}</Card>

//         <Card style={styles.longDescriptionCard}>
//           <HTMLView value={product.LongDescription} stylesheet={styles.html} />
//         </Card>

//         <View style={styles.faqSection}>
//           <Text style>FAQ</Text>
//           {product.fAQ.map((faq, index) => (
//             <List.Accordion
//               key={index}
//               title={faq[0]}
//               left={props => <List.Icon {...props} icon="help-circle" />}
//             >
//               <Text style={styles.faqContent}>{faq[1]}</Text>
//             </List.Accordion>
//           ))}
//         </View>
//       </ScrollView>

//       {product?.RedirectLink && (
//         <Button
//           mode="contained"
//           style={styles.floatingButton}
//           onPress={handleRedirect}
//         >
//           Go to Link
//         </Button>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 5,
//     margin: 2,
//     backgroundColor: '#fff',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   productImage: {
//     width: '100%',
//     height: 250,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   tabButton: {
//     flex: 1,
//     marginHorizontal: 2,
//   },
//   card: {
//     padding: 5,
//     marginBottom: 20,
//   },
//   longDescriptionCard: {
//     marginBottom: 20,
//   },
//   faqSection: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   faqContent: {
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     textAlign: 'center',
//   },
//   html: {
//     p: {
//       fontSize: 16,
//       lineHeight: 20,
//     },
//     // Add other styles for HTML elements as needed
//   },
//   floatingButton: {
//     position: 'absolute',
//     right: 10,
//     bottom: 50,
//     backgroundColor: '#6200EE',
//     borderRadius: 50,
//     paddingHorizontal: 20,
//     zIndex: 1000,
//   },
// });

// export default ProductDetailPage;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions, Linking } from 'react-native';
import { Button, Card, Title, List } from 'react-native-paper';
import HTMLView from 'react-native-htmlview';
import { API_URL } from '@env';

const { width, height } = Dimensions.get('window'); // Get the screen dimensions

const ProductDetailPage = ({ route }) => {
  const { ProductId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Eligibility');

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/ProductDetailsPage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ProductId }),
      });

      const contentType = response.headers.get('content-type');

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (data.status === 'true') {
          // console.log("data->", data.data);
          setProduct(data.data);
        }
      } else {
        const text = await response.text();
        console.error('Expected JSON but got:', text);
      }
    } catch (error) {
      console.error('Error fetching product details:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [ProductId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product details not found.</Text>
      </View>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Eligibility':
        return <HTMLView value={product.EligibilityCriteria} stylesheet={styles.html} />;
      case 'Documentation':
        return <HTMLView value={product.documention} stylesheet={styles.html} />;
      case 'Charges':
        return <HTMLView value={product.Charges} stylesheet={styles.html} />;
      default:
        return null;
    }
  };

  const handleRedirect = () => {
    if (product?.RedirectLink) {
      Linking.openURL(product.RedirectLink).catch(err => console.error('Error opening link:', err));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {product.MainImage && (
          <Image
            source={{ uri: product.MainImage }}
            style={styles.productImage}
            resizeMode="contain" // Maintain aspect ratio
          />
        )}

        <Title style={styles.title}>{product.MetaTitle}</Title>
        <Text style={styles.description}>{product.MetaDescription}</Text>

        <View style={styles.tabContainer}>
          <Button
            mode={activeTab === 'Eligibility' ? 'contained' : 'outlined'}
            onPress={() => setActiveTab('Eligibility')}
            style={styles.tabButton}
          >
            Eligibility
          </Button>
          <Button
            mode={activeTab === 'Documentation' ? 'contained' : 'outlined'}
            onPress={() => setActiveTab('Documentation')}
            style={styles.tabButton}
          >
            Documentation
          </Button>
          <Button
            mode={activeTab === 'Charges' ? 'contained' : 'outlined'}
            onPress={() => setActiveTab('Charges')}
            style={styles.tabButton}
          >
            Charges
          </Button>
        </View>

        <Card style={styles.card}>{renderTabContent()}</Card>

        <Card style={styles.longDescriptionCard}>
          <HTMLView value={product.LongDescription} stylesheet={styles.html} />
        </Card>

        <View style={styles.faqSection}>
          <Text style>FAQ</Text>
          {product.fAQ.map((faq, index) => (
            <List.Accordion
              key={index}
              title={faq[0]}
              left={props => <List.Icon {...props} icon="help-circle" />}
            >
              <Text style={styles.faqContent}>{faq[1]}</Text>
            </List.Accordion>
          ))}
        </View>
      </ScrollView>

      {product?.RedirectLink && (
        <Button
          mode="contained"
          style={styles.floatingButton}
          onPress={handleRedirect}
        >
          Apply Here
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 2,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 2,
  },
  card: {
    padding: 5,
    marginBottom: 20,
  },
  longDescriptionCard: {
    marginBottom: 20,
  },
  faqSection: {
    marginTop: 10,
    marginBottom: 10,
  },
  faqContent: {
    padding: 10,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  html: {
    p: {
      fontSize: 16,
      lineHeight: 20,
    },
  },
  floatingButton: {
    position: 'absolute',
    right: -40,
    top: height / 2, // This places the button in the vertical middle
    backgroundColor: '#FF8C00', // Dark orange color
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1000,
    transform: [{ rotate: '-90deg' }], 
  },
});

export default ProductDetailPage;
