import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, 
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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateField = (field, value) => {
    let errorMessage = "";

    switch (field) {
      case "name":
        if (!value) errorMessage = "Nama tidak boleh kosong!";
        break;
      case "phoneNumber":
        if (!value) errorMessage = "Nomor telepon tidak boleh kosong!";
        break;
      case "email":
        if (!value) {
          errorMessage = "Email tidak boleh kosong!";
        } else if (!isValidEmail(value)) {
          errorMessage = "Format email tidak valid!";
        }
        break;
      case "address":
        if (!value) errorMessage = "Alamat tidak boleh kosong!";
        break;
      case "password":
        if (!value) {
          errorMessage = "Password tidak boleh kosong!";
        } else if (value.length < 6) {
          errorMessage = "Password harus minimal 6 karakter!";
        }
        break;
      case "confirmPassword":
        if (!value) {
          errorMessage = "Konfirmasi password tidak boleh kosong!";
        } else if (value !== password) {
          errorMessage = "Konfirmasi password tidak sesuai!";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  const handleRegister = async () => {
    if (Object.values(errors).some((error) => error !== "")) return;

    const success = await register({ name, phoneNumber, email, address, password });
    if (success) {
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <KeyboardAvoidingView       
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
                onChangeText={(text) => {
                  setName(text);
                  validateField("name", text);
                }}
              />
            </View>
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

            {/* Input Phone Number */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nomor Telepon"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(text) => {
                  setPhoneNumber(text);
                  validateField("phoneNumber", text);
                }}
              />
            </View>
            {errors.phoneNumber ? <Text style={styles.errorText}>{errors.phoneNumber}</Text> : null}

            {/* Input Email */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  validateField("email", text);
                }}
              />
            </View>
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            {/* Input Address */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Alamat"
                value={address}
                onChangeText={(text) => {
                  setAddress(text);
                  validateField("address", text);
                }}
              />
            </View>
            {errors.address ? <Text style={styles.errorText}>{errors.address}</Text> : null}

            {/* Input Password */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Kata Sandi"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  validateField("password", text);
                }}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              >
                <Ionicons name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            {/* Input Confirm Password */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Konfirmasi Kata Sandi"
                secureTextEntry={secureConfirmTextEntry}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  validateField("confirmPassword", text);
                }}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)}
              >
                <Ionicons name={secureConfirmTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

            {/* Button Register */}
            <TouchableOpacity 
              style={[styles.registerButton, { opacity: Object.values(errors).some((e) => e !== "") ? 0.5 : 1 }]}
              onPress={handleRegister}
              disabled={Object.values(errors).some((e) => e !== "")}
            >
              {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.registerButtonText}>Daftar</Text>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
