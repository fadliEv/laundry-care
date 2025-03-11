import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./OrderSummaryScreen.style";

const OrderSummaryScreen = ({ route, navigation }) => {
  const { orderDetails } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pesanan Anda</Text>
      <Text>Atas Nama: {orderDetails.user}</Text>
      <Text>Tanggal Order: {orderDetails.orderDate}</Text>
      <Text>Tanggal Antar: {orderDetails.deliveryDate}</Text>

      <FlatList
        data={orderDetails.services}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Text>{item.name}</Text>
            <Text>{item.quantity}x</Text>
            <Text>Rp {item.price.toLocaleString()}</Text>
          </View>
        )}
      />

      <Text style={styles.totalText}>Total: Rp {orderDetails.total.toLocaleString()}</Text>
    </View>
  );
};

export default OrderSummaryScreen;
