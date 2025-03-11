import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "./OrderScreen.style";
import { SCREEN_PATH } from "../../navigation/PathNavigator";

const servicesData = [
  { label: "CKL (Cuci Kering Lipat)", value: "CKL", price: 10000 },
  { label: "CKS (Cuci Kering Setrika)", value: "CKS", price: 15000 },
  { label: "CSLMB (Cuci Selimut/Bed Cover)", value: "CSLMB", price: 25000 },
  { label: "CJKT (Cuci Jaket Tebal)", value: "CJKT", price: 20000 },
];

const OrderScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [quantities, setQuantities] = useState({});
  
  const handleAddService = () => {
    if (!selectedService) {
      Alert.alert("Pilih Layanan", "Silakan pilih layanan terlebih dahulu!");
      return;
    }
    if (services.length >= 3) {
      Alert.alert("Batas Layanan", "Maksimal 3 layanan per order!");
      return;
    }
    const serviceDetail = servicesData.find((s) => s.value === selectedService);
    setServices([...services, serviceDetail]);
    setSelectedService(null);
    setQuantities({ ...quantities, [serviceDetail.value]: 1 });
  };

  const handleQuantityChange = (service, value) => {
    setQuantities({ ...quantities, [service]: value });
  };

  const calculateTotal = () => {
    return services.reduce((total, service) => total + service.price * (quantities[service.value] || 1), 0);
  };

  const handleOrder = () => {
    if (services.length === 0) {
      Alert.alert("Order Kosong", "Tambahkan layanan sebelum melakukan order!");
      return;
    }

    const orderDetails = {
      user: "John Doe",
      orderDate: new Date().toLocaleDateString(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString(),
      services: services.map((s) => ({
        name: s.label,
        price: s.price,
        quantity: quantities[s.value] || 1,
      })),
      total: calculateTotal(),
    };

    Alert.alert(
        "Konfirmasi Pesanan",
        "Apakah Anda yakin ingin memesan layanan ini?",
        [
          {
            text: "Batal",
            style: "cancel",
          },
          {
            text: "Ya",
            onPress: () => {              
              navigation.navigate(SCREEN_PATH.ORDER_SUMMARY,{orderDetails});
            },
          },
        ]
      );

    // navigation.navigate(SCREEN_PATH.ORDER_SUMMARY, { orderDetails });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Buat Pesanan</Text>

      <DropDownPicker
        open={open}
        value={selectedService}
        items={servicesData}
        setOpen={setOpen}
        setValue={setSelectedService}
        placeholder="Pilih Layanan"
        containerStyle={styles.dropdown}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddService}>
        <Ionicons name="add-circle" size={24} color="white" />
        <Text style={styles.addButtonText}>Tambah Layanan</Text>
      </TouchableOpacity>

      <FlatList
        data={services}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Text style={styles.serviceText}>{item.label}</Text>
            <Text style={styles.servicePrice}>Rp {item.price.toLocaleString()}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange(item.value, (quantities[item.value] || 1) + 1)}>
              <Ionicons name="add-circle-outline" size={24} color="green" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantities[item.value] || 1}</Text>
            <TouchableOpacity
              onPress={() =>
                handleQuantityChange(item.value, Math.max((quantities[item.value] || 1) - 1, 1))
              }
            >
              <Ionicons name="remove-circle-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Bayar:</Text>
        <Text style={styles.totalPrice}>Rp {calculateTotal().toLocaleString()}</Text>
      </View>

      <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;
