import React, { useState, useEffect } from "react";
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import useAuth from "../../hooks/useAuth"; 
import styles from "./RegisterScreen.style";
import InputField from "../../shared/components/input/InputField";
import Button from "../../shared/components/button/Button";
import { validateRegisterForm } from "./registerValidation";

const RegisterScreen = ({ navigation }) => {
  const { register, loading } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateRegisterForm(field, value, formData);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleRegister = async () => {
    if (!isFormValid) return;

    const success = await register(formData);
    if (success) {
      navigation.navigate("LoginScreen");
    }
  };

  useEffect(() => {
    setIsFormValid(
      Object.values(formData).every((value) => value !== "") &&
      Object.values(errors).every((e) => e === "")
    );
  }, [formData, errors]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <View style={styles.logoSection}>
            <Image style={styles.logo} source={require("../../shared/assets/registration.png")} />
          </View>

          <View style={styles.content}>
            <Text style={styles.appTitle}>LaundryCare</Text>
            <Text style={styles.subTitle}>Buat Akun Baru</Text>

            <InputField 
              placeholder="Nama Lengkap"
              value={formData.name} 
              onChangeText={(text) => handleChange("name", text)} 
              error={errors.name}
            />
            <InputField 
              placeholder="Nomor Telepon"
              keyboardType="phone-pad"
              value={formData.phoneNumber} 
              onChangeText={(text) => handleChange("phoneNumber", text)} 
              error={errors.phoneNumber}
            />
            <InputField 
              placeholder="Email"
              keyboardType="email-address"
              value={formData.email} 
              onChangeText={(text) => handleChange("email", text)} 
              error={errors.email}
            />
            <InputField 
              placeholder="Alamat"
              value={formData.address} 
              onChangeText={(text) => handleChange("address", text)} 
              error={errors.address}
            />
            <InputField 
              placeholder="Kata Sandi"
              secureTextEntry={secureTextEntry} 
              value={formData.password} 
              onChangeText={(text) => handleChange("password", text)} 
              onToggleSecure={() => setSecureTextEntry(!secureTextEntry)} 
              error={errors.password}
            />
            <InputField 
              placeholder="Konfirmasi Kata Sandi"
              secureTextEntry={secureConfirmTextEntry} 
              value={formData.confirmPassword} 
              onChangeText={(text) => handleChange("confirmPassword", text)} 
              onToggleSecure={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)} 
              error={errors.confirmPassword}
            />

            <Button 
              title="Daftar" 
              onPress={handleRegister} 
              loading={loading} 
              disabled={!isFormValid} 
            />

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
