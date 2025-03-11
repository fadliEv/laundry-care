import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./OrderSummaryScreen.style";
import { SCREEN_PATH } from "../../navigation/PathNavigator";


const OrderSummaryScreen = ({ route, navigation }) => {
  const { orderDetails } = route.params;

  const handleGoHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: SCREEN_PATH.DASHBOARD }],
    });
  };

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
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Text style={styles.homeButtonText}>Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummaryScreen;
