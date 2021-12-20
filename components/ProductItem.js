import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import { viewDetails, deleteProduct } from "../store/actions/products";
import { addToCart } from "../store/actions/cart";

const ProductItem = ({ item, admin }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [inCart, setIncart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    let cartItem = cartItems.filter((i) => i.id === item.item.id);
    if (cartItem?.length > 0) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [cartItems]);

  const handleViewDetail = (id) => {
    dispatch(viewDetails(id));
    navigation.navigate("ProductDetails");
  };

  const handleEdit = (id) => {
    dispatch(viewDetails(id));
    navigation.navigate("Edit Product");
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    Alert.alert("Product Deleted");
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.item}>
      <Image source={{ uri: item.item.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.item.title}</Text>
        <Text style={styles.price}>${item.item.price}</Text>
      </View>
      {admin ? (
        <View style={styles.buttons}>
          <View style={styles.btn1}>
            <Button title="Edit" onPress={() => handleEdit(item.item.id)} />
          </View>
          <View style={styles.btn2}>
            <Button
              title="Delete"
              onPress={() =>
                Alert.alert(
                  "Delete Product",
                  `Are you sure you want to  delete ${item.item.title}?`,
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Delete",
                      onPress: () => handleDelete(item.item.id),
                    },
                  ]
                )
              }
              color="red"
            />
          </View>
        </View>
      ) : (
        <View style={styles.buttons}>
          <View style={styles.btn1}>
            <Button
              title="View Details"
              onPress={() => handleViewDetail(item.item.id)}
            />
          </View>
          <View style={styles.btn2}>
            {inCart ? (
              <Button
                title="In Cart"
                color="red"
                onPress={() =>
                  Alert.alert(
                    "Add to cart",
                    `${item.item.title} already in cart`,
                    [
                      {
                        text: "Continue shopping",
                        style: "cancel",
                      },
                      {
                        text: "Go to cart",
                        onPress: () => navigation.navigate("Cart"),
                      },
                    ]
                  )
                }
              />
            ) : (
              <Button
                title="Add To Cart"
                color="red"
                onPress={() =>
                  Alert.alert("Add to cart", `Add ${item.item.title} to cart`, [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Continue",
                      onPress: () => handleAddToCart(item.item),
                    },
                  ])
                }
              />
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 24,
    backgroundColor: "white",
    marginVertical: 10,
    paddingBottom: 16,
  },
  image: {
    height: 180,
    width: "100%",
  },
  details: {
    padding: 20,
  },
  title: {
    color: "tomato",
    fontSize: 24,
  },
  price: {
    color: "grey",
  },
  buttons: {
    paddingHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn1: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    width: "40%",
  },
  btn2: {
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 8,
    width: "40%",
  },
});

export default ProductItem;
