import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import JobDetails from './job-details/[id]';

// Create a stack navigator
const Stack = createStackNavigator();

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, margin: 4 }}>
      <Stack.Navigator >
        <Stack.Screen 
          name='Welcome' 
          options={{ 
            headerStyle: { backgroundColor: COLORS.lightWhite }, 
            headerShadowVisible: false, 
            headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
            headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>,
            headerTitle:" "
          }} 
          
        >
          {() => (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome />
                <Popularjobs/>
                <Nearbyjobs/>
              </View>
            </ScrollView>
          )}
        </Stack.Screen>
        <Stack.Screen name='JobDetails' component={JobDetails} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Home;
