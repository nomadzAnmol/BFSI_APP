// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; 

// const SearchScreen = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [notFound, setNotFound] = useState(false);
//   const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

//   const keywords = ['Loan', 'Credit Card', 'Home Loans']; // Suggested keywords

//   // Debouncing effect
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedQuery(searchQuery);
//     }, 500); // 500ms delay before executing search

//     return () => {
//       clearTimeout(handler); // Clear timeout if user is still typing
//     };
//   }, [searchQuery]); // Runs whenever searchQuery changes

//   // Filter keywords based on search query
//   const filteredKeywords = keywords.filter(keyword => 
//     keyword.toLowerCase().includes(debouncedQuery.toLowerCase())
//   );

//   // Check if no matches are found
//   useEffect(() => {
//     if (debouncedQuery && filteredKeywords.length === 0) {
//       setNotFound(true);
//     } else {
//       setNotFound(false);
//     }
//   }, [debouncedQuery, filteredKeywords]);

//   return (
//     <View style={styles.container}>
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
//         <TextInput 
//           style={styles.searchInput}
//           placeholder="Type your search query here..."
//           value={searchQuery}
//           onChangeText={setSearchQuery} // Update search query state
//         />
//       </View>

//       {/* OOPs Not Found Message */}
//       {notFound && (
//         <Text style={styles.notFoundText}>OOPs Not Found</Text>
//       )}

//       {/* Suggested Keywords */}
//       <View style={styles.suggestionsContainer}>
//         <Text style={styles.suggestionsHeading}>Suggested Keywords:</Text>
//         <View style={styles.suggestions}>
//           {filteredKeywords.map((keyword, index) => (
//             <TouchableOpacity key={index} style={styles.suggestionButton}>
//               <Text style={styles.suggestionText}>{keyword}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: '5%',
//     justifyContent: 'center', 
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#4C4DDC',
//     borderWidth: 1,
//     borderRadius: 20, 
//     paddingVertical: '2%',
//     paddingHorizontal: '3%',
//     marginBottom: '8%',
//   },
//   searchInput: {
//     flex: 1,
//     height: 40, 
//     paddingHorizontal: '2%',
//   },
//   searchIcon: {
//     marginHorizontal: '2%',
//   },
//   notFoundText: {
//     color: 'red',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: '4%',
//   },
//   suggestionsContainer: {
//     marginTop: '4%',
//   },
//   suggestionsHeading: {
//     fontSize: 16,
//     marginBottom: '2%',
//     fontWeight: 'bold',
//   },
//   suggestions: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   suggestionButton: {
//     backgroundColor: '#fff', 
//     borderColor: '#4C4DDC', 
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: '2%',
//     marginRight: '2%',
//     marginBottom: '2%',
//   },
//   suggestionText: {
//     fontSize: 14,
//   },
// });

// export default SearchScreen;

import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  const keywords = ['Loan', 'Credit Card', 'Home Loans']; // Suggested keywords

  // Debouncing effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // 500ms delay before executing search

    return () => {
      clearTimeout(handler); // Clear timeout if user is still typing
    };
  }, [searchQuery]); // Runs whenever searchQuery changes

  // Filter keywords based on search query
  const filteredKeywords = keywords.filter(keyword => 
    keyword.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  // Check if no matches are found
  useEffect(() => {
    if (debouncedQuery && filteredKeywords.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [debouncedQuery, filteredKeywords]);

  // Handle keyword click, set the search query and navigate to ProductPage
  const handleKeywordClick = (keyword) => {
    setSearchQuery(keyword); // Set the clicked keyword in the search bar
    navigation.navigate('ProductPage', { keyword }); // Pass keyword to ProductPage
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
      {notFound && (
        <Text style={styles.notFoundText}>OOPs Not Found</Text>
      )}

      {/* Suggested Keywords */}
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsHeading}>Suggested Keywords:</Text>
        <View style={styles.suggestions}>
          {filteredKeywords.map((keyword, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.suggestionButton}
              onPress={() => handleKeywordClick(keyword)} // Handle keyword click
            >
              <Text style={styles.suggestionText}>{keyword}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    justifyContent: 'center', 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#4C4DDC',
    borderWidth: 1,
    borderRadius: 20, 
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginBottom: '8%',
  },
  searchInput: {
    flex: 1,
    height: 40, 
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
    marginTop: '4%',
  },
  suggestionsHeading: {
    fontSize: 16,
    marginBottom: '2%',
    fontWeight: 'bold',
  },
  suggestions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  suggestionButton: {
    backgroundColor: '#fff', 
    borderColor: '#4C4DDC', 
    borderWidth: 1,
    borderRadius: 8,
    padding: '2%',
    marginRight: '2%',
    marginBottom: '2%',
  },
  suggestionText: {
    fontSize: 14,
  },
});

export default SearchScreen;
