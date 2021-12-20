import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import ProductList from "../../components/ProductList";

const Products = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="cart"
            iconName="cart-outline"
            onPress={() => navigation.navigate("Cart")}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="menu-outline"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const products = useSelector((state) => state.products.products);

  return <ProductList products={products} />;
};

export default Products;
