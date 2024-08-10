import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => (
  <View style={styles.container}>
    <Text>About Us Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutUsScreen;
