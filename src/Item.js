import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import List from "./List";
import { getMovieRecommendations } from "./api";

const Item = ({
  movieClick,
  item: { id, backdrop_path, original_title, overview }
}) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    setRecommendations([]);
    getMovieRecommendations(id).then(({ results }) => {
      setTimeout(() => {
        setRecommendations(results);
      }, 1000);
    });
  }, [id]);

  return (
    <View>
      {backdrop_path && (
        <Image
          source={`http://image.tmdb.org/t/p/w200/${backdrop_path}?api_key=da50ad1d11b0ba194991d37120384288`}
          style={{ width: 200, height: 100 }}
        />
      )}
      <Text>{original_title}</Text>
      <Text>{overview}</Text>
      <Text>Recommendations</Text>
      {recommendations.length !== 0 && (
        <List items={recommendations} movieClick={movieClick} />
      )}
      {recommendations.length === 0 && <Text>Loading...</Text>}
    </View>
  );
};

export default Item;
