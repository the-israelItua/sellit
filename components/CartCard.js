import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { increaseQty, reduceQty, removeFromCart } from "../store/actions/cart";
import { Item } from "react-navigation-header-buttons";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    item.qty === 1
      ? dispatch(removeFromCart(item))
      : dispatch(reduceQty(item.id));
  };
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price * item.qty}</Text>
        <Text style={styles.qty}>Qty: {item.qty} pcs</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleRemove}>
          <Ionicons
            name={item.qty === 1 ? "trash" : "remove-outline"}
            size={16}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increaseQty(item.id))}
        >
          <Ionicons name="add-outline" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "tomato",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: "2%",
    marginVertical: 10,
    padding: 10,
    height: 120,
    borderRadius: 8,
  },
  image: {
    height: 100,
    width: "20%",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    width: 28,
    height: 28,
    borderColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "tomato",
  },
  title: {
    color: "tomato",
    fontSize: 16,
    marginBottom: 10,
  },
  qty: {
    color: "grey",
    marginTop: 8,
  },
});

export default CartCard;
