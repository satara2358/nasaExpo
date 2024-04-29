import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { PostImage } from "../../../types";
import React, { FC } from "react";

const TodayImage: FC<PostImage> = ({
  date,
  title,
  url
}) => {
  return ( 
    <View style={styles.container}>
      <Image source={{ uri: url}}  style={styles.images}/>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text  style={styles.date}>{date}</Text>
      <TouchableOpacity
				onPress={() => {
					console.log('I am tapped');
				}}
				style={styles.buttonContainer3}
			>
				<Text style={styles.buttonText3}>Imagen Dia</Text>
			</TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginEnd: 24,
    borderRadius: 32,
    padding: 16,

  },
  images:{
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,

  },
  title:{
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold'
  },
  date:{
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer3:{
    alignItems: 'flex-end',
  },
  buttonText3: {
		textTransform: 'uppercase',
		color: '#fff',
		fontSize: 14,
    fontWeight: 'bold'
	},
})
 
export default TodayImage;