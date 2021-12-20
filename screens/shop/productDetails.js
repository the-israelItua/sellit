import React, { useLayoutEffect } from "react";
import { Text, Button, Image, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import { addToCart } from "../../store/actions/cart";

const ProductDetails = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.products.selProduct);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="cart"
            iconName="cart-outline"
            onPress={() => navigation.navigate("Cart")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.screen}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.details}>{product.details}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <View style={styles.btn}>
        <Button
          title="Add To Cart"
          color="tomato"
          onPress={() => handleAddToCart(product)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "50%",
    width: "100%",
  },
  btn: {
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 8,
    width: "50%",
  },
  title: {
    fontSize: 19,
    marginVertical: 10,
  },
  details: {
    fontSize: 14,
    color: "grey",
  },
  price: {
    fontSize: 16,
    marginVertical: 12,
  },
});

export default ProductDetails;
