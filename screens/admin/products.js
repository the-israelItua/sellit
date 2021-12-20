import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import ProductList from "../../components/ProductList";

const AdminProducts = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add"
            iconName="add-outline"
            onPress={() => navigation.navigate("Add Product")}
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

  const products = useSelector((state) => state.products.adminProducts);

  return <ProductList products={products} admin />;
};

export default AdminProducts;
