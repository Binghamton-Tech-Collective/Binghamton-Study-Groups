import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, }}>
      <Tabs.Screen
        name="homescreen"
        options={{
          headerShown: false,
          title: 'Home',
           
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerShown: false,
          title: 'Discover',
          
        }}
      />

      <Tabs.Screen
        name = "createStudyGroup"
        options={{
            headershown: false,
            title: 'Create Group'
        }}
        />


    </Tabs>
  );
}