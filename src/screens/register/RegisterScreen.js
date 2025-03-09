import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, 
  Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard 
} from "react-native";
import useAuth from "../../hooks/useAuth"; 
import { Ionicons } from "@expo/vector-icons";
import styles from "./RegisterScreen.style";

const RegisterScreen = ({ navigation }) => {
  const { register, loading } = useAuth();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleRegister = async () => {
    if (!name || !phoneNumber || !email || !address || !password) {
      Alert.alert("Registrasi Gagal", "Semua kolom harus diisi!");
      return;
    }

    const success = await register({ name, phoneNumber, email, address, password });
    if (success) {
      Alert.alert("Registrasi Berhasil", "Silakan login dengan akun yang telah dibuat.");
      navigation.navigate("LoginScreen"); // Arahkan ke login
    } else {
      Alert.alert("Registrasi Gagal", "Terjadi kesalahan, coba lagi!");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 100} 
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={styles.scrollView} 
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
        >          

          {/* Logo Section */}
          <View style={styles.logoSection}>
            <Image
              style={styles.logo}
              source={require("../../shared/assets/registration.png")}
            />
          </View>

          {/* Content Section */}
          <View style={styles.content}>
            <Text style={styles.appTitle}>LaundryCare</Text>
            <Text style={styles.subTitle}>Buat Akun Baru</Text>

            {/* Input Name */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nama Lengkap"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Input Phone Number */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nomor Telepon"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>

            {/* Input Email */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Input Address */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Alamat"
                value={address}
                onChangeText={setAddress}
              />
            </View>

            {/* Input Password */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Kata Sandi"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              >
                <Ionicons name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />
              </TouchableOpacity>
            </View>

            {/* Button Register */}
            {loading ? (
              <ActivityIndicator size="large" color="#FF8C00" />
            ) : (
              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Daftar</Text>
              </TouchableOpacity>
            )}

            {/* Link ke Login */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Sudah punya akun?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={styles.loginLink}> Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
