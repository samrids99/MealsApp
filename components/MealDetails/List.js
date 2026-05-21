import { Text, StyleSheet, View } from "react-native";

function List({ listItems }) {
  return listItems.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "rgb(117, 99, 143)4)",
  },
  itemText: {
    color: "white",
    textAlign: "center",
  },
});
