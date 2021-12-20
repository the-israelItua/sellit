import React from "react";
import { useSelector } from "react-redux";
import { Text, Button, View, StyleSheet, FlatList } from "react-native";
import CartCard from "../../components/CartCard";

const Cart = () => {
  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={(item) => <CartCard item={item.item} key={item} />}
      />
      <Text>{total}</Text>
      <Button title="Order Now" />
    </View>
  );
};

export default Cart;
