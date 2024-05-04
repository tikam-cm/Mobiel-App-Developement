import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App(){
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCards/>
          <ContactList/>
          <ActionCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  darkText: {
    color: 'black'
  },
  whiteText: {
    color: 'white'
  }
})
export default App;