import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Home from "./src/Home";
import { getMovies, getMovie } from "./src/api";
import Item from "./src/Item";

export default function App() {
  const [text, setText] = useState("");

  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const updateMovies = (pattern = "A") => {
    setMovie(null);
    if (!pattern) pattern = "A";
    getMovies(pattern).then(({ results }) => {
      setMovies(results);
    });
  };

  const updateMovie = id => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  };

  useEffect(() => {
    updateMovies();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={t => setText(t)}
        style={{ borderWidth: 2, borderColor: "black" }}
      />
      <Button title="Search" onPress={() => updateMovies(text)} />
      {!movie && <Home movies={movies} movieClick={updateMovie} />}
      {movie && <Item item={movie} movieClick={updateMovie} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
