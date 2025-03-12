import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SCREEN_PATH } from "../../navigation/PathNavigator";
import styles from "./OrderSummaryScreen.style";

const OrderSummaryScreen = ({ route, navigation }) => {
  const { orderResponse } = route.params;

  useEffect(() => {
    console.log("Order Response : ", orderResponse);
  }, []);

  const handleGoHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: SCREEN_PATH.MAIN_APP }],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="checkmark-circle" size={50} color="#28a745" />
        <Text style={styles.headerText}>Pesanan Berhasil!</Text>
        <Text style={styles.subHeaderText}>
          Pesanan Anda telah diterima dan sedang diproses.
        </Text>
      </View>

      {/* Informasi Order */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={20} color="#FF8C00" />
          <Text style={styles.infoText}>
            Atas Nama: <Text style={styles.boldText}>{orderResponse.customer?.name || "N/A"}</Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#FF8C00" />
          <Text style={styles.infoText}>
            Tanggal Order: <Text style={styles.boldText}>{orderResponse.createdAt}</Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={20} color="#FF8C00" />
          <Text style={styles.infoText}>
            Perkiraan Selesai: <Text style={styles.boldText}>{orderResponse.pickupDate}</Text>
          </Text>
        </View>
      </View>

      {/* Detail Layanan */}
      <Text style={styles.sectionTitle}>Detail Layanan</Text>
      {orderResponse.details.map((item, index) => (
        <View key={index} style={styles.serviceCard}>
          <View style={styles.serviceHeader}>
            <Ionicons name="shirt-outline" size={24} color="#FF8C00" />
            <Text style={styles.serviceTitle}>{item.product.name}</Text>
          </View>
          <Text style={styles.serviceDescription}>{item.product.description}</Text>
          <View style={styles.serviceFooter}>
            <Text style={styles.serviceQuantity}>Qty: {item.qty}</Text>
            <Text style={styles.servicePrice}>Rp {item.subTotal.toLocaleString()}</Text>
          </View>
        </View>
      ))}

      {/* Total Harga */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Pembayaran</Text>
        <Text style={styles.totalPrice}>Rp {orderResponse.total.toLocaleString()}</Text>
      </View>

      {/* Informasi Tambahan */}
      <View style={styles.additionalInfo}>
        <Ionicons name="information-circle-outline" size={20} color="#FF8C00" />
        <Text style={styles.additionalText}>
          Pesanan Anda sedang dalam proses pencucian. Kami akan menghubungi Anda jika ada informasi lebih lanjut.
        </Text>
      </View>

      {/* Tombol Kembali ke Beranda */}
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Ionicons name="home-outline" size={22} color="white" />
        <Text style={styles.homeButtonText}>Kembali ke Beranda</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderSummaryScreen;
