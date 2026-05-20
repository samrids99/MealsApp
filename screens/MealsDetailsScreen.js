import { Image, Text, StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id == mealId).title;

    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, navigation]);

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  return (
    <>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} />
        <Text>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            duration={selectedMeal.duration}
          />
        </View>
        <Text>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({});
