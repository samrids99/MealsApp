import { StyleSheet, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import MealItem from "../MealList/MealItem";

function MealsList({ items, navigation }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
      onPress: () => navigation.navigate("MealsDetails", { mealId: item.id }),
    };

    return (
      <>
        <MealItem {...mealItemProps} />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgb(232, 214, 255)",
  },
  listStyle: {
    backgroundColor: "rgb(232, 214, 255)",
  },
});
