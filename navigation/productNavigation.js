import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import ProductsScreen from "../screens/shop/products";
import ProductDetailsScreen from "../screens/shop/productDetails";
import CartScreen from "../screens/shop/cart";
import OrdersScreen from "../screens/orders";
import AdminScreen from "../screens/admin/products";
import EditScreen from "../screens/admin/editProduct";
import AddScreen from "../screens/admin/addProduct";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function productStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      mode="modal"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

function orderStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      mode="modal"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
}

function adminStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      mode="modal"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Edit Product" component={EditScreen} />
      <Stack.Screen name="Add Product" component={AddScreen} />
    </Stack.Navigator>
  );
}

function drawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "tomato",
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1,
        },
      }}
    >
      <Drawer.Screen
        name="Shop"
        component={productStack}
        options={{
          title: "Shop",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="cash-outline"
              size={size}
              color={focused ? "tomato" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={orderStack}
        options={{
          title: "Orders",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="list-outline"
              size={size}
              color={focused ? "tomato" : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={adminStack}
        options={{
          title: "Admin",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={focused ? "tomato" : "#ccc"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default drawer;
