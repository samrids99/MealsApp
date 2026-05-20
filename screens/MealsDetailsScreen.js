import { Text } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id == mealId).title;

    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, navigation]);

  return <Text>Hello, world</Text>;
}

export default MealsDetailsScreen;
