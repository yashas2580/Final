import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DisasterGuide from './DisasterGuide';
import EmergencyContact from './EmergencyContact';
import WeatherUpdates from './WeatherUpdate';
import IncidentReportingScreen from './IncidentReportingScreen';
import SafetyCheck from './SafetyCheck';
import Shelter from './ShelterFinder';
import LoginScreen  from './LoginScreen';
import { Ionicons } from '@expo/vector-icons'; // Import the vector icon library

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Disaster Guide') {
              iconName = 'book';
            } else if (route.name === 'Emergency Contacts') {
              iconName = 'call';
            } else if (route.name === 'Safety') {
              iconName = 'warning';
            } else if (route.name === 'Weather Updates') {
              iconName = 'cloud';
            } else if (route.name === 'Incident') {
              iconName = 'alert';
            } else if (route.name === 'Shelters') {
              iconName = 'map';
            }

            // Return the icon with styling
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1976D2',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Disaster Guide" component={DisasterGuide} />
        <Tab.Screen name="Emergency Contacts" component={EmergencyContact} />
        <Tab.Screen name="Safety" component={SafetyCheck} />
        <Tab.Screen name="Weather Updates" component={WeatherUpdates} />
        <Tab.Screen name="Incident" component={IncidentReportingScreen} />
        <Tab.Screen name="Shelters" component={Shelter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
