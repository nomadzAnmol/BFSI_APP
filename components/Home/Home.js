import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TopBar from './TopBar';
import { API_URL } from '@env';


const { width, height } = Dimensions.get('window');

const wp = (percent) => width * (percent / 100);
const hp = (percent) => height * (percent / 100);

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const navigation = useNavigation();

  const fetchLoanCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/HomePageCategory`);
      const data = await response.json();
      if (response.ok) {
        setCategories(data.data);
      }
      else {
        console.error("Failed to fetch..", data);
      }
    }
    catch (error) {
      console.error("Error Fetching Data", error);
    }
  };

  useEffect(() => {
    fetchLoanCategories();
  }, []);

  const handleScroll = (event, carouselNumber) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    if (carouselNumber === 1 && slide !== activeIndex) {
      setActiveIndex(slide);
    } else if (carouselNumber === 2 && slide !== activeIndex2) {
      setActiveIndex2(slide);
    }
  };

  

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <TopBar />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onFocus={() => navigation.navigate('SearchScreen')}
        />
        <FontAwesome
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
      </View>
      <View>
        <Text style={styles.heading}>
          Future of Banking & Finance
        </Text>
      </View>

      {/* First Carousel */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => handleScroll(e, 1)}
          scrollEventThrottle={16}
        >
          <View style={styles.carouselCard}>
            <Text style={styles.cardHeading}>Lorem Ipsum</Text>
            <Text style={styles.cardSubHeading}>Card 1 Subheading</Text>
          </View>
          <View style={styles.carouselCard}>
            <Text style={styles.cardHeading}>Card 2 Heading</Text>
            <Text style={styles.cardSubHeading}>Card 2 Subheading</Text>
          </View>
          <View style={styles.carouselCard}>
            <Text style={styles.cardHeading}>Card 3 Heading</Text>
            <Text style={styles.cardSubHeading}>Card 3 Subheading</Text>
          </View>
        </ScrollView>

        <View style={styles.dotsContainer}>
          {[...Array(3).keys()].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: activeIndex === index ? 'blue' : '#ccc' },
              ]}
            />
          ))}
        </View>
      </View>

   {/* Loan Categories */}
   
{/* <Text style={styles.heading}>Loan Categories</Text>
<View style={styles.categoriesContainer}>
  
  {categories.map((category) => {
    return (
      <TouchableOpacity key={category.id} style={styles.categoryIconContainer}  >
       
        {category.Image && typeof category.Image === 'string' ? (
          <Image
            source={{ uri: category.Image }} 
            style={styles.categoryImage}
          />
        ) : (
          <FontAwesome name="line-chart" size={32} color="Black" /> 
        )}
       
        <Text style={styles.categoryText}>
          {category.Title ? category.Title : 'No Title'}
        </Text>
      </TouchableOpacity>
    );
  })}
</View> */}

   {/* Loan Categories */}
   <Text style={styles.heading}>Loan Categories</Text>
      <View style={styles.categoriesContainer}>
        {/* Map through categories and render them dynamically */}
        {categories.map((category) => {
          return (
            <TouchableOpacity 
              key={category.id} 
              style={styles.categoryIconContainer} 
              onPress={() => navigation.navigate('SubCategory', { SubCategoryId: category.id })} // Navigate to SubCategory and pass id
            >
              {/* Conditionally render image or icon */}
              {category.Image && typeof category.Image === 'string' ? (
                <Image
                  source={{ uri: category.Image }} // Use the image if available
                  style={styles.categoryImage}
                />
              ) : (
                <FontAwesome name="line-chart" size={32} color="Black" /> // Render icon if image is not available
              )}
              {/* Ensure the title is a string and wrapped in a Text component */}
              <Text style={styles.categoryText}>
                {category.Title ? category.Title : 'No Title'} {/* Fallback if title is missing */}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>


      {/* Second Carousel */}
      <Text style={styles.heading}>Personal Finance Essentials</Text>

      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => handleScroll(e, 2)}
          scrollEventThrottle={16}
        >
          <View style={styles.carouselCard}>
            <Text style={styles.cardHeading}>Personal Loan</Text>
            <Text style={styles.cardSubHeading}>Low interest rates</Text>
          </View>
          <View style={styles.carouselCard}>
            <Text style={styles.cardHeading}>Home Loan</Text>
            <Text style={styles.cardSubHeading}>Easy EMI options</Text>
          </View>
          <View style={styles.carouselCard}>
            <Text style={styles.cardHeading}>Car Loan</Text>
            <Text style={styles.cardSubHeading}>Quick approval</Text>
          </View>
        </ScrollView>
      </View>
      {/* <BottomTabNavigator/> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingTop: hp(10),
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    marginRight: wp(2),
  },
  profileImage: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(50),
  },
  userName: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: wp(2),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    paddingVertical: wp(2),
  },
  searchIcon: {
    paddingLeft: wp(2),
  },
  carouselContainer: {
    height: hp(20),
    marginBottom: hp(3),
  },
  carouselCard: {
    width: wp(80),
    marginRight: wp(2),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C4DDC',
    borderRadius: wp(2),
    padding: wp(4),
  },
  cardHeading: {
    fontSize: wp(4),
    color: '#fff',
    fontWeight: 'bold',
  },
  cardSubHeading: {
    fontSize: wp(3),
    color: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(1),

  },
  dot: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(1),
    marginHorizontal: wp(0.5),
  },
  heading: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(2),
    marginLeft: wp(2),
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  categoryIconContainer: {
    width: wp(22),
    alignItems: 'center',
    marginBottom: hp(2),
  },
  categoryIcon: {
    backgroundColor: '#4C4DDC',
    borderRadius: wp(10),
    padding: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  categoryText: {
    fontSize: wp(3),
    fontWeight: 'bold',
  },
});

export default Home;
