import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function Index() {
  return (

    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
