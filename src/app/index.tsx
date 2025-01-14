import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'red'}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </SafeAreaView>
  );
}
