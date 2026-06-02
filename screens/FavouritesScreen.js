import { Text, StyleSheet, View } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen({ navigation }) {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id),
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You currently have no favourite meals</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} navigation={navigation} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(232, 214, 255)",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
