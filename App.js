import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import (createAppContainer, createSwitchNavigator}from 'react-navigation'; 

import AssetExample from './components/AssetExample';


import { Card } from 'react-native-paper';

export default function App() {
  var AppNavigator = createSwitchNavigator({ homescreen:homescreen, summaryscreen:summaryscreen, }) 
const Apr:Container = createAppContainer(AppNavigator) 
16 var class ref =await db.ref(7').onValue', data => { 17 
var all_students = (] 18 
]var class_a = data.val().class A; 19 for (
  var i in class_a) { 20 all_students.push(class_a[i]); 21 22 all_students.sort(function(a, b) { 23 return a.roll_no - b.roll_no; 24 }); 25 this.setState({ all_students: all_students }); 26 1); 
  updateAttendence(roll_no, status) 
  var id = "; if (roll_no <= 9) id = '0' + roll_no; else { id = roll_no; } 
var today = new Date(); var dd = today.getDate(); var mm = today.getMonth() + ; 
{ 
var yyyy = today.getFullYear(): if (dd < 10) { dd = '0' + dd; } if (mm < 10) { mm = '0' + mm; } today a dd + yyyy; 
var ref_path = id; 
var class_ref = db.ref(ref_path); class_ref.updateg [today]: status, }); 


  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
