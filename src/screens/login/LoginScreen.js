import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, 
  Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard 
} from "react-native";
import useAuth from "../../hooks/useAuth"; 
import { Ionicons } from "@expo/vector-icons";
import styles from "./LoginScreen.style";

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      Alert.alert("Login Berhasil", "Selamat datang di LaundryCare!");
    } else {
      Alert.alert("Login Gagal", "Email atau password salah!");
    }
  };

  return (
    <KeyboardAvoidingView 
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 120}
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 2 }} keyboardShouldPersistTaps="handled" scrollEnabled={true}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Masuk</Text>
          </View>

          {/* Logo Section */}
          <View style={styles.logoSection}>
            <Image
              style={styles.logo}
              source={require("../../shared/assets/login.png")}
            />
          </View>

          {/* Content Section */}
          <View style={styles.content}>
            <Text style={styles.appTitle}>LaundryCare</Text>
            <Text style={styles.subTitle}>Laundry Super App</Text>

            {/* Input Email */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nomor Telepon / Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
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

            {/* Lupa Kata Sandi */}
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Lupa Kata Sandi</Text>
            </TouchableOpacity>

            {/* Button Login */}
            {loading ? (
              <ActivityIndicator size="large" color="#FF8C00" />
            ) : (
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Masuk</Text>
              </TouchableOpacity>
            )}

            {/* Link ke Register */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Belum mempunyai akun?</Text>
              <TouchableOpacity>
                <Text style={styles.registerLink}> Daftar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
