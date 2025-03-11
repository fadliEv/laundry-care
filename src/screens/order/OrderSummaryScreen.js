import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SCREEN_PATH } from "../../navigation/PathNavigator";
import styles from "./OrderSummaryScreen.style";

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
            Atas Nama: <Text style={styles.boldText}>{orderDetails.user}</Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#FF8C00" />
          <Text style={styles.infoText}>
            Tanggal Order:{" "}
            <Text style={styles.boldText}>{orderDetails.orderDate}</Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={20} color="#FF8C00" />
          <Text style={styles.infoText}>
            Perkiraan Selesai:{" "}
            <Text style={styles.boldText}>{orderDetails.deliveryDate}</Text>
          </Text>
        </View>
      </View>

      {/* Daftar Layanan */}
      <Text style={styles.sectionTitle}>Detail Layanan</Text>
      <FlatList
        data={orderDetails.services}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <View style={styles.serviceInfo}>
              <Ionicons name="shirt-outline" size={22} color="#555" />
              <View>
                <Text style={styles.serviceText}>{item.name}</Text>
                <Text style={styles.serviceDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
            <Text style={styles.serviceQuantity}>{item.quantity}x</Text>
            <Text style={styles.servicePrice}>
              Rp {item.price.toLocaleString()}
            </Text>
          </View>
        )}
      />

      {/* Total Harga */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Pembayaran</Text>
        <Text style={styles.totalPrice}>
          Rp {orderDetails.total.toLocaleString()}
        </Text>
      </View>

      {/* Informasi Tambahan */}
      <View style={styles.additionalInfo}>
        <Ionicons name="information-circle-outline" size={20} color="#FF8C00" />
        <Text style={styles.additionalText}>
          Pesanan Anda sedang dalam proses pencucian. Kami akan menghubungi
          Anda jika ada informasi lebih lanjut.
        </Text>
      </View>

      {/* Tombol Kembali ke Beranda */}
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Ionicons name="home-outline" size={22} color="white" />
        <Text style={styles.homeButtonText}>Kembali ke Beranda</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummaryScreen;
