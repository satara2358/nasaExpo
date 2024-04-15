import React from "react";
import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View>
      <View>
        <Text>Header</Text>
      </View>
      <View>
        <Image source={require('../../../assets/nasa-logo.svg')}/>
      </View>
    </View>
  );
};

export default Header;
