import React from "react";
import { View, Text } from "react-native";

const List = ({ items, movieClick }) => {
  const elements = items.map(({ id, original_title }) => {
    return (
      <View key={id}>
        <Text
          style={{ textDecorationLine: "underline" }}
          onPress={() => movieClick(id)}
        >
          {original_title}123
        </Text>
      </View>
    );
  });

  return <View>{elements}</View>;
};

export default List;
