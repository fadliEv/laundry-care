import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style/OrderScreen.style";
import { SCREEN_PATH } from "../../navigation/PathNavigator";
import orderService from "../../services/orderService";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../store/slice/appSlice";
import { useAuth } from "../../context/authContext";


const OrderScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [serviceOptions,setServiceOptions] = useState([])

  // Redux
  const dispatch = useDispatch()

  // context 
  const {currentUser} = useAuth()

  const fetchProducts = async () => {
    dispatch(startLoading())
    try {
      const products = await orderService.getProducts()
      const formattedProducts = products.map(item => ({
        label : item.name,
        value : item.id,
        price : item.price,
        description : item.description
      }))
      setServiceOptions(formattedProducts)
    } catch (error) {      
      Alert.alert("Fail to get data")
    }finally{
      dispatch(stopLoading())
    }
  }

  
  useEffect(()=> {
    fetchProducts()    
  },[])

  
  const handleAddService = () => {
    if (!selectedService) {
      Alert.alert("Pilih Layanan", "Silakan pilih layanan terlebih dahulu!");
      return;
    }

    const exisitingService = services.find(s => s.value === selectedService)
    
    if(exisitingService){
      Alert.alert("Tidak boleh memilih layanan yang sama")
      return
    }

    if (services.length >= 3) {
      Alert.alert("Batas Layanan", "Maksimal 3 layanan per order!");
      return;
    }
    const serviceDetail = serviceOptions.find((s) => s.value === selectedService);
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

  const handlePostOrder = async (payload) => {
    dispatch(startLoading())
    try {
      const responseOrder = await orderService.createOrder(payload.customerId, payload.orderDetails)
      return responseOrder
    } catch (error) {
      Alert.alert("Transaction is Fail")
    }finally { 
      dispatch(stopLoading())
    }
  }

  const handleOrder = () => {
    if (services.length === 0) {
      Alert.alert("Order Kosong", "Tambahkan layanan sebelum melakukan order!");
      return;
    }

    const orderDetails = services.map((s) => ({
      label: s.label,
      value: s.value,
      price: s.price,
      quantity: quantities[s.value] || 1,
    }))

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
            onPress: async () => {                            
              const payload = {
                customerId : currentUser.id,
                orderDetails : orderDetails
              }
              const response = await handlePostOrder(payload)                                                        
              navigation.reset({
                index : 0,
                routes : [{name : SCREEN_PATH.ORDER_SUMMARY, params : {orderResponse : response}}]
              })
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
        items={serviceOptions}
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
