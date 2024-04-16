import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explorer</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={require('../../../assets/nasa-logo.svg')} style={styles.image}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftContainer: {
    flex:1,
    alignItems: 'flex-start'
  },
  rightContainer:{
    flex: 1,
    alignItems: 'flex-end'
  },
  title:{
    fontSize: 20,
    color: '#e8e1e1'
  },
  image:{
    width: 60,
    height: 60
  }

})

export default Header;
