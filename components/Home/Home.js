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
  Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TopBar from './TopBar';
import { API_URL } from '@env';
import { useKeepAwake } from 'expo-keep-awake';  // Import KeepAwake
// Import images
import Car from '../../assets/car.jpeg';
import Business from '../../assets/business.jpeg';
import Personal from '../../assets/personal-Loan.jpg';
import life from '../../assets/life.jpeg';
import health from '../../assets/health.jpeg';
import travel from '../../assets/travel.jpeg';
import loanL from '../../assets/loanl.png';
import investmentl from '../../assets/investment.png';
import bankP from '../../assets/bankP.png';
import lifeinsurancei from '../../assets/insurance.png';


const { width, height } = Dimensions.get('window');
const wp = (percent) => width * (percent / 100);
const hp = (percent) => height * (percent / 100);

const Home = () => {
  useKeepAwake();
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchLoanCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/HomePageCategory`);
        const data = await response.json();
        if (response.ok) {
          setCategories(data.data);
        } else {
          console.error("Failed to fetch..", data);
        }
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
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

  const handleImagePress = (index) => {
    // Define redirects based on the image index
    if (index === 0) {
      Linking.openURL('https://www.kotak.com/en/personal-banking/loans/car-loan.html')
    } else if (index === 1) {
      Linking.openURL('https://www.kotak.com/en/business/loans/business-loan.html')  // Navigate to the Business Loan screen
    } else if (index === 2) {
      Linking.openURL('https://www.idfcfirstbank.com/')  // Navigate to the Personal Loan screen
    }
  };
 
  const categoryImages = [loanL, lifeinsurancei,investmentl, bankP]; 

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

      {/* First Carousel */}
      <View>
    <Text style={styles.heading}>Apply Loan</Text>
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => handleScroll(e, 1)}
        scrollEventThrottle={16}
      >
        {[Car, Business, Personal].map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
            <View style={styles.carouselCard}>
              <Image source={image} style={styles.carouselImage} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {[...Array(3).keys()].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: activeIndex === index ? '#4C4DDC' : '#ccc' },
            ]}
          />
        ))}
      </View>
    </View>
  </View>
     
          {/* Categories  */}

      <Text style={styles.heading1}>Categories</Text>
      {/* <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryIconContainer} 
            onPress={() => navigation.navigate('SubCategory', { SubCategoryId: category.id })}
          >
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
        ))}
      </View> */}
      <View style={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity 
          key={category.id} 
          style={styles.categoryIconContainer} 
          onPress={() => navigation.navigate('SubCategory', { SubCategoryId: category.id })}
        >
          {categoryImages[index] ? (  // Use the new images
            <Image
              source={categoryImages[index]} // Render the corresponding image
              style={styles.categoryImage}
            />
          ) : (
            <FontAwesome name="line-chart" size={32} color="Black" />
          )}
          <Text style={styles.categoryText}>
            {category.Title ? category.Title : 'No Title'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

      {/* Second Carousel */}
      <Text style={styles.heading}>Personal Essentials like Insurance</Text>
<View style={styles.carouselContainer}>
  <ScrollView
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    onScroll={(e) => handleScroll(e, 2)}
    scrollEventThrottle={16}
  >
    {[
      { heading: 'Travel Insurance', subheading: 'Low interest rates', image: travel, url: 'https://www.zurichkotak.com/travel-insurance' },
      { heading: 'Term Life Insurance', subheading: 'Easy EMI options', image: life, url: 'https://lifeinsurance.adityabirlacapital.com/' },
      { heading: 'Health Insurance', subheading: 'Quick approval', image: health, url: 'https://www.adityabirlacapital.com/healthinsurance/homepage' },
    ].map((item, index) => (
      <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
        <View style={styles.carouselCard}>
          <Image source={item.image} style={styles.carouselImage} />
          <Text style={styles.cardHeading}>{item.heading}</Text>
          <Text style={styles.cardSubHeading}>{item.subheading}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryImage: {
  width: wp(16), // Adjust width as needed
  height: hp(5), // Adjust height as needed
  resizeMode: 'contain', // Adjust for better image fit
},
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingTop: hp(8),
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
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
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  carouselCard: {
    width: wp(80),
    height: '100%',
    marginRight: wp(2),
    borderRadius: wp(2),
    marginBottom: hp(5),
    overflow: 'hidden', // Ensures image edges are rounded
    // backgroundColor: '#4C4DDC', // Background color for second carousel
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
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
    marginBottom: hp(1),
    marginLeft: wp(2),
  },
  heading1: {
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
  categoryText: {
    fontSize: wp(3),
    fontWeight: 'bold',
  },
});

export default Home;

