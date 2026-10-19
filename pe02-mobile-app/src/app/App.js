import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 - Software Engineering',
    'CS 506 - Programming for Computing',
    'CS 519 - Cloud Computing Overview',
    'CS 533 - Computer Architecture',
    'CS 547 - Secure Systems and Programs',
    'CS 622 - Discrete Math and Algorithms for Computing',
    'DS 510 - Artificial Intelligence for Data Science',
    'DS 620 - Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 - Full-Stack Development - Mobile App',
    'CS 628 - Full-Stack Development - Web App',
  ];

  const capstoneCourses = [
    'CS 687 - Computer Science Capstone',
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        MSCS Courses
      </Text>

      <Text style={styles.question}>
        Which course did you like?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      {favoriteCourse.trim() !== '' && (
        <View style={styles.favoriteBox}>
          <Text style={styles.favoriteText}>
            My Favorite Course: {favoriteCourse}
          </Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>
        Core Requirements (24 credits)
      </Text>

      {coreCourses.map((course) => (
        <Text key={course} style={styles.course}>
          {course}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>
        Depth of Study (6 credits)
      </Text>

      {depthCourses.map((course) => (
        <Text key={course} style={styles.course}>
          {course}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>
        Capstone (3 credits)
      </Text>

      {capstoneCourses.map((course) => (
        <Text key={course} style={styles.course}>
          {course}
        </Text>
      ))}

      <Text style={styles.footer}>
        City University of Seattle
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#222222',
  },
  question: {
    fontSize: 18,
    marginBottom: 8,
    color: '#222222',
  },
  input: {
    height: 48,
    borderColor: '#888888',
    borderWidth: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 24,
    backgroundColor: '#ffffff',
  },
  favoriteBox: {
    backgroundColor: '#fffde7',
    padding: 12,
    marginBottom: 20,
    borderRadius: 6,
  },
  favoriteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#ffff00',
    color: '#000000',
    padding: 8,
    marginTop: 16,
    marginBottom: 10,
  },
  course: {
    fontSize: 16,
    color: '#222222',
    marginBottom: 8,
    lineHeight: 23,
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
    marginTop: 30,
  },
});

export default App;