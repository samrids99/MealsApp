import { Image, Text, StyleSheet, View, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetails/SubTitle";
import List from "../components/MealDetails/List";
import { Button } from "react-native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

function MealsDetailsScreen({ route, navigation }) {
  // const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  // true if is already a favourite
  // const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);
  const mealIsFavourite = favouriteMealIds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      // favouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id == mealId).title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="black"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [mealId, navigation, changeFavouriteStatusHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);

  return (
    <>
      <ScrollView style={styles.rootContainer}>
        {/* must use width and height for network img */}
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            duration={selectedMeal.duration}
          />
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List listItems={selectedMeal.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List listItems={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "rgb(117, 99, 143)4)",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
