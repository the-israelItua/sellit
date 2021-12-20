import React from "react";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ products, admin }) => {
  return (
    <FlatList
      data={products}
      renderItem={(item) => (
        <ProductItem item={item} key={item.id} admin={admin} />
      )}
    />
  );
};

export default ProductList;
