import { Image, StyleSheet, Text, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function Index() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
