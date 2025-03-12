import React, { useEffect, useState } from "react";
import { View, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Text, Alert } from "react-native";
import styles from "./style/LoginScreen.style";
import LoginForm from "./LoginForm";
import { validateLoginForm } from "./loginValidation"; 
import { SCREEN_PATH } from "../../navigation/PathNavigator";
import authService from "../../services/authService";
import localStorage from "../../utils/localStorage";
import { useAuth } from "../../context/authContext";


const LoginScreen = ({ navigation }) => {  
  const {login} = useAuth()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateLoginForm(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  useEffect(() => {
    setIsFormValid(
      formData.username !== "" &&
      formData.password !== "" &&
      Object.values(errors).every((e) => e === "")
    );
  }, [formData, errors]);

  const handleLogin = async () => {
    if (!isFormValid) {
      Alert.alert("Login Gagal", "Silakan isi username dan password dengan benar!");
      return;
    }
    const isSuccess = await login(formData.username, formData.password)
    if (!isSuccess){
      Alert.alert("Login Gagal", "Username atau password salah!")
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
           {/* Header Section with Orange Background */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../shared/assets/login.png")} />
          </View>
          <LoginForm
            formData={formData}
            errors={errors}
            secureTextEntry={secureTextEntry}
            onToggleSecure={() => setSecureTextEntry(!secureTextEntry)}
            onChange={handleChange}
            onLogin={handleLogin}
            isFormValid={isFormValid}
            navigation={navigation}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
