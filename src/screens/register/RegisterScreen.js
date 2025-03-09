import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import useAuth from "../../hooks/useAuth";
import styles from "./RegisterScreen.style";

const RegisterScreen = ({ onRegister }) => {
  const { register, loading } = useAuth();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !phoneNumber || !email || !address || !password) {
      Alert.alert("Registrasi Gagal", "Semua kolom harus diisi!");
      return;
    }

    const success = await register({ name, phoneNumber, email, address, password });
    if (success) {
      Alert.alert("Registrasi Berhasil", "Silakan login dengan akun yang telah dibuat.");
      onRegister();
    } else {
      Alert.alert("Registrasi Gagal", "Terjadi kesalahan, coba lagi!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Nama Lengkap" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Nomor Telepon" keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Alamat" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      {loading ? <ActivityIndicator size="large" color="blue" /> : <Button title="Daftar" onPress={handleRegister} />}
    </View>
  );
};

export default RegisterScreen;
