import React, { useLayoutEffect } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Products = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
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

  return (
    <View style={styles.screen}>
      <Text>This is the orders page</Text>
      <Button title="Check product" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default Products;
