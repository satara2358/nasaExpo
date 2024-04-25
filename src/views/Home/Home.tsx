
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";

const Home = () => {
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imagenDay = await fetchApi();
        console.log(imagenDay);
      } catch (error) {
        console.error(error);
      }
    };
    loadImage().catch(null);
  }, []);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
export default Home;
