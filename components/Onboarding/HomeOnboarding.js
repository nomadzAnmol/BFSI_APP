import React, { useState } from 'react';
import { View } from 'react-native';
import FirstPage from './Firstpage';
import SecondPage from './Secondpage';
import ThirdPage from './Thirdpage';
import FourthPage from './Fourthpage';
import FifthPage from './Fifthpage';

const HomeOnboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPress = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 5)); // Navigate to the next page, up to page 5
  };

  return (
    <View style={{ flex: 1 }}>
      {currentPage === 1 && <FirstPage onNextPress={handleNextPress} activeDotIndex={0} />}
      {currentPage === 2 && <SecondPage onNextPress={handleNextPress} activeDotIndex={1} />}
      {currentPage === 3 && <ThirdPage onNextPress={handleNextPress} activeDotIndex={2} />}
      {currentPage === 4 && <FourthPage onNextPress={handleNextPress} activeDotIndex={3} />}
      {currentPage === 5 && <FifthPage onNextPress={handleNextPress} activeDotIndex={4} />}
    </View>
  );
};

export default HomeOnboarding;
