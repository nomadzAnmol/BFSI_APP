import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions, Linking } from 'react-native';
import { Button, Card, Title, List } from 'react-native-paper';
import HTMLView from 'react-native-htmlview';
import { API_URL } from '@env';

const { width, height } = Dimensions.get('window');

const ProductDetailPage = ({ route }) => {
  const { ProductId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Eligibility');

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/ProductDetailsPage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ProductId }),
      });

      if (!response.ok) throw new Error(`Server Error: ${response.status}`);

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (data.status === 'true') setProduct(data.data);
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

  useEffect(() => { fetchProductDetails(); }, [ProductId]);

  if (loading) return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#4B0082" />
    </View>
  );

  if (!product) return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Product details not found.</Text>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Eligibility': return <HTMLView value={product.EligibilityCriteria} stylesheet={styles.html} />;
      case 'Documentation': return <HTMLView value={product.documention} stylesheet={styles.html} />;
      case 'Charges': return <HTMLView value={product.Charges} stylesheet={styles.html} />;
      default: return null;
    }
  };

  const handleRedirect = () => {
    if (product?.RedirectLink) {
      Linking.openURL(product.RedirectLink).catch(err => console.error('Error opening link:', err));
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <ScrollView style={styles.container}>
        {product.MainImage && (
          <Image source={{ uri: product.MainImage }} style={styles.productImage} resizeMode="contain" />
        )}

        <Title style={styles.title}>{product.MetaTitle}</Title>
        <Text style={styles.description}>{product.MetaDescription}</Text>

        <View style={styles.tabContainer}>
          {['Eligibility', 'Documentation', 'Charges'].map((tab) => (
            <Button
              key={tab}
              mode={activeTab === tab ? 'contained' : 'outlined'}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabButton,
                activeTab === tab && { backgroundColor: '#4B0082' },
              ]}
              labelStyle={{ color: activeTab === tab ? '#fff' : '#4B0082' }}
            >
              {tab}
            </Button>
          ))}
        </View>

        <Card style={styles.card}>{renderTabContent()}</Card>

        <Card style={styles.longDescriptionCard}>
          <HTMLView value={product.LongDescription} stylesheet={styles.html} />
        </Card>

        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          {product.fAQ.map((faq, index) => (
            <List.Accordion
              key={index}
              title={faq[0]}
              left={props => <List.Icon {...props} icon="help-circle" />}
              titleStyle={styles.faqHeader}
            >
              <Text style={styles.faqContent}>{faq[1]}</Text>
            </List.Accordion>
          ))}
        </View>
      </ScrollView>

      {product?.RedirectLink && (
        <Button mode="contained" style={styles.floatingButton} onPress={handleRedirect}>
          Apply Now
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 3,
    borderRadius: 5,
  },
  card: {
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 10,
  },
  longDescriptionCard: {
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
  },
  faqSection: {
    marginBottom: 15,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },
  faqHeader: {
    fontSize: 16,
    color: '#4B0082',
  },
  faqContent: {
    fontSize: 14,
    color: '#333',
    padding: 10,
    backgroundColor: '#F9F9F9',
  },
  errorText: {
    fontSize: 18,
    color: '#FF4500',
    textAlign: 'center',
  },
  html: {
    p: { fontSize: 16, lineHeight: 24 },
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#FF4500',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 20,
    elevation: 4,
  },
});

export default ProductDetailPage;