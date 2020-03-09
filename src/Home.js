import React from "react";
import { View, Text } from "react-native";
import List from "./List";

const Home = ({ movies, movieClick }) => {
  return (
    <View>
      <Text>Home</Text>
      <List items={movies} movieClick={movieClick} />
    </View>
  );
};

export default Home;
