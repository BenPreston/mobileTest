import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  CornershopThemeProvider,
  Ar,
  ArrowLeft,
  ArrowNext,
  ArrowPrev,
  ArrowRight,
  Basket,
  Calendar,
  Card,
  Checked,
  Coffee,
  Cross,
  ErrorOutline,
  Filter,
  Hamburger,
  Heart,
  HeartFull,
  // HightlightOff,
  Home,
  LinkOutline,
  Lock,
  Look,
  Maestro,
  Map,
  Mastercard,
  Minus,
  MinusOnly,
  Plus,
  PlusOnly,
  Point,
  Profile,
  Question,
  Retake,
  RoyaltyPoints,
  Search,
  Scan,
  Time,
  User,
  Visa,
  Wifi,
  TaskLog,
  DataViz,
  Briefing,
  Team,
} from '@capgemini-aie/cornershop-component-library';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CornershopThemeProvider>
          <View>
            <Team active size={100} />
            <Briefing active size={100} />
            <DataViz active size={100} />
            <TaskLog active size={100} />
            <Wifi size={100} />
            <Visa size={100} />
            <User size={100} />
            <Time size={100} />
            <Search size={100} />
            <Scan size={100} />
            <RoyaltyPoints size={100} />
            <Retake size={100} />
            <Question size={100} />
            <Profile inactive size={100} />
            <Point size={100} />
            <PlusOnly size={100} />
            <Plus size={100} />
            <MinusOnly size={100} />
            <Minus size={100} />
            <Mastercard size={100} />
            <Map inactive size={100} />
            <Maestro size={100} />
            <Look inactive size={100} />
            <Lock size={100} />
            <LinkOutline size={100} />
            <Home size={100} />
            <HeartFull size={100} />
            <Heart size={100} />
            <Hamburger size={100} />
            <Filter size={100} />
            <ErrorOutline size={100} />
            <Cross size={100} />
            <Coffee size={100} />
            <Checked size={100} />
            <Card size={100} />
            <Calendar size={100} />
            <Basket size={100} />
            <ArrowLeft size={100} />
            <ArrowNext size={100} />
            <ArrowPrev size={100} />
            <ArrowRight size={100} />
            <Ar inactive size={100} />
          </View>
        </CornershopThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
