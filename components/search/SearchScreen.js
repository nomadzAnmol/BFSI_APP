import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { API_URL } from '@env';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  // Fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/Category`);
      const data = await response.json();
      if (data.status === 'true') {
        setCategories(data.data);
      } else {
        Alert.alert('Error', 'Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      Alert.alert('Error', 'Failed to fetch categories');
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories on mount
  }, []);

  // Filter categories based on search query
  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCategories(filtered);

    if (searchQuery && filtered.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [searchQuery, categories]);

  // Handle keyword selection and post ID to fetch subcategories
  const handleKeywordClick = async (category) => {
    setSearchQuery(category.Title); // Set selected keyword in the search bar
    try {
      const response = await fetch(`${API_URL}/SubCategory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CategoryId: category.id }), // Send selected category ID
      });
      const data = await response.json();
      if (response.ok && data.status === 'true') {
        setSubCategories(data.data); // Set the subcategories
      } else {
        Alert.alert('Error', 'Failed to fetch subcategories');
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      Alert.alert('Error', 'Failed to fetch subcategories');
    }
  };

  // Handle subcategory click to navigate to ProductPage
  const handleSubCategoryClick = (subCategory) => {
    // Assuming you'll pass the subcategory data to the ProductPage
    // console.log("Subcategory - ",subCategory.id);
    navigation.navigate('ProductPage', { SubCategoryId: subCategory.id });
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Type your search query here..."
          value={searchQuery}
          onChangeText={setSearchQuery} // Update search query state
        />
      </View>

      {/* OOPs Not Found Message */}
      {notFound && <Text style={styles.notFoundText}>OOPs Not Found</Text>}

      {/* Suggested Categories */}
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsHeading}>Suggested Categories:</Text>
        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionButton}
              onPress={() => handleKeywordClick(item)} // Handle category click
            >
              <Text style={styles.suggestionText}>{item.Title}</Text>
            </TouchableOpacity>
          )}
          numColumns={3} // Display 3 categories per row
        />
      </View>

      {/* SubCategories View */}
      <View style={styles.subCategoriesContainer}>
        <Text style={styles.subCategoriesHeading}>SubCategories:</Text>
        {subCategories.length > 0 ? (
          <FlatList
            data={subCategories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.subCategoryButton}
                onPress={() => handleSubCategoryClick(item)} // Navigate to ProductPage
              >
                <Text style={styles.subCategoryText}>{item.Title}</Text>
              </TouchableOpacity>
            )}
            numColumns={3} // Display 3 subcategories per row
          />
        ) : (
          <Text style={styles.noSubCategoryText}>
            Select a category to view subcategories.
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: '#f9f9f9', // Optional: a light background color for better contrast
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4C4DDC',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginTop: '25%',
  },
  searchInput: {
    flex: 1,
    height: 60,
    paddingHorizontal: '2%',
  },
  searchIcon: {
    marginHorizontal: '2%',
  },
  notFoundText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '4%',
  },
  suggestionsContainer: {
    marginBottom: '4%',
    marginTop: '2%',
  },
  suggestionsHeading: {
    fontSize: 16,
    marginTop: '2%',
    marginBottom:'5%',
    fontWeight: 'bold',
  },
  suggestionButton: {
    backgroundColor: '#fff',
    borderColor: '#4C4DDC',
    borderWidth: 1,
    borderRadius: 8,
    padding: '4%',
    marginRight: '2%',
    marginBottom: '2%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subCategoriesContainer: {
    marginTop: '5%',
  },
  subCategoriesHeading: {
    fontSize: 16,
    marginBottom:'5%',
    fontWeight: 'bold',
  },
  subCategoryButton: {
    backgroundColor: '#fff',
    borderColor: '#4C4DDC',
    borderWidth: 1,
    borderRadius: 8,
    padding: '4%',
    marginRight: '2%',
    marginBottom: '2%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCategoryText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noSubCategoryText: {
    color: '#666',
    marginTop: 10,
  },
});

export default SearchScreen;
