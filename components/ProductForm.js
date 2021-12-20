import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { editProduct, addProduct } from "../store/actions/products";

const ProductForm = ({ edit }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const selProduct = useSelector((state) => state.products.selProduct);

  const [title, setTitle] = useState(edit ? selProduct.title : "");
  const [details, setDetails] = useState(edit ? selProduct.details : "");
  const [imageUrl, setImageUrl] = useState(edit ? selProduct.imageUrl : "");
  const [price, setPrice] = useState(edit ? selProduct.price : "");

  const handleUpdate = (id) => {
    if (edit) {
      let item = {
        ...selProduct,
        title,
        details,
        imageUrl,
        price,
      };

      dispatch(editProduct(id, item));
    } else {
      let item = {
        id: "p5",
        catId: "u5",
        title,
        details,
        imageUrl,
        price,
      };
      dispatch(addProduct(item));
    }

    navigation.navigate("Admin");
    Alert.alert(edit ? "Updated" : "Product Added");
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          autoFocus
          placeholder="Enter Product Name"
          value={title}
          onChangeText={(text) => setTitle(text)}
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Details"
          value={details}
          onChangeText={(text) => setDetails(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Image Url</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Image URL"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Price"
          keyboardType="numeric"
          value={price.toString()}
          onChangeText={(text) => setPrice(parseFloat(text))}
        />
      </View>
      <View style={styles.buttonWrap}>
        <View style={styles.button}>
          <Button
            title={edit ? "Update" : "Add Product"}
            color="tomato"
            onPress={() => handleUpdate(selProduct.id)}
            color="tomato"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: "2%",
    paddingBottom: "50%",
  },
  formGroup: {
    margin: "2%",
    marginTop: 20,
  },
  label: {
    color: "grey",
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
  },
  buttonWrap: {
    alignItems: "center",
    marginTop: 23,
  },
  button: {
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 8,
    width: "40%",
  },
});

export default ProductForm;
