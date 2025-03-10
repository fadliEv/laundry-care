import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, 
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
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateField = (field, value) => {
    let errorMessage = "";

    switch (field) {
      case "email":
        if (!value) {
          errorMessage = "Email tidak boleh kosong!";
        } else if (!isValidEmail(value)) {
          errorMessage = "Format email tidak valid!";
        }
        break;
      case "password":
        if (!value) {
          errorMessage = "Password tidak boleh kosong!";
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

  const handleLogin = async () => {
    if (Object.values(errors).some((error) => error !== "")) return;

    const success = await login(email, password);
    if (success) {
      navigation.navigate("DashboardScreen");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Email atau password salah!",
      }));
    }
  };

  return (
    <KeyboardAvoidingView 
      
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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

            {/* Lupa Kata Sandi */}
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Lupa Kata Sandi</Text>
            </TouchableOpacity>

            {/* Button Login */}
            <TouchableOpacity 
              style={[styles.loginButton, { opacity: Object.values(errors).some((e) => e !== "") ? 0.5 : 1 }]}
              onPress={handleLogin}
              disabled={Object.values(errors).some((e) => e !== "")}
            >
              {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.loginButtonText}>Masuk</Text>}
            </TouchableOpacity>

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
