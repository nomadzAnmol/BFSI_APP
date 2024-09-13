// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
// import Collapsible from 'react-native-collapsible';
// import { FontAwesome } from '@expo/vector-icons';

// const HelpPage = () => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Support Center</Text>

//  <Text>
//  console.log('Current route:', navigation.getCurrentRoute());

//  </Text>
     
//       {/* FAQ Section */}
//       <View style={styles.accordionContainer}>
//         {faqData.map((item, index) => (
//           <View key={index} style={styles.accordionItem}>
//             <TouchableOpacity
//               style={styles.accordionHeader}
//               onPress={() => setCollapsed(index === collapsed ? null : index)}
//             >
//               <Text style={styles.accordionTitle}>{item.question}</Text>
//               <FontAwesome
//                 name={collapsed === index ? 'chevron-up' : 'chevron-down'}
//                 size={20}
//                 color="#4C4DDC"
//               />
//             </TouchableOpacity>
//             <Collapsible collapsed={collapsed !== index}>
//               <View style={styles.accordionContent}>
//                 <Text style={styles.accordionText}>{item.answer}</Text>
//               </View>
//             </Collapsible>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// // Dummy FAQ data
// const faqData = [
//   {
//     question: 'How do I reset my password?',
//     answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password.',
//   },
//   {
//     question: 'How can I contact support?',
//     answer: 'You can contact support by emailing support@example.com or by calling our support hotline at 123-456-7890.',
//   },
//   {
//     question: 'Where can I find my purchase history?',
//     answer: 'Your purchase history can be found in the "Account" section under "Order History".',
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     marginTop:30,
//     textAlign: 'center',
//     color:'#4C4DDC'
//   },
//   accordionContainer: {
//     // backgroundColor: 'red',
//     // borderRadius: 10,
//     // padding: 10,
//     // shadowColor: '#000',
//     // shadowOpacity: 0.1,
//     // shadowRadius: 5,
//     // elevation: 5, // Shadow for Android
//   },
//   accordionItem: {
//     marginTop: 10,
//   },
//   accordionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   accordionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color:'#4C4DDC'
//   },
//   accordionContent: {
//     padding: 5,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   accordionText: {
//     fontSize: 16,
//   },
// });

// export default HelpPage;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import navigation and route hooks

const HelpPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigation = useNavigation(); // Initialize navigation hook
  const route = useRoute(); // Initialize route hook

  // Log the current route when the component mounts or updates
  useEffect(() => {
    console.log('Current route:', route.name); // Log the route name
  }, [route.name]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Support Center</Text>
      
      {/* FAQ Section */}
      <View style={styles.accordionContainer}>
        {faqData.map((item, index) => (
          <View key={index} style={styles.accordionItem}>
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={() => setCollapsed(index === collapsed ? null : index)}
            >
              <Text style={styles.accordionTitle}>{item.question}</Text>
              <FontAwesome
                name={collapsed === index ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#4C4DDC"
              />
            </TouchableOpacity>
            <Collapsible collapsed={collapsed !== index}>
              <View style={styles.accordionContent}>
                <Text style={styles.accordionText}>{item.answer}</Text>
              </View>
            </Collapsible>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Dummy FAQ data
const faqData = [
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact support by emailing support@example.com or by calling our support hotline at 123-456-7890.',
  },
  {
    question: 'Where can I find my purchase history?',
    answer: 'Your purchase history can be found in the "Account" section under "Order History".',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
    color: '#4C4DDC',
  },
  accordionContainer: {
    // Customize styles if needed
  },
  accordionItem: {
    marginTop: 10,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4C4DDC',
  },
  accordionContent: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  accordionText: {
    fontSize: 16,
  },
});

export default HelpPage;
