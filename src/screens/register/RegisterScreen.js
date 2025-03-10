import React, { useState, useEffect } from "react";
import { View, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import useAuth from "../../hooks/useAuth"; 
import styles from "./style/RegisterScreen.style";
import RegisterForm from "./RegisterForm";
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

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateRegisterForm(field, value, formData);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  useEffect(() => {
    setIsFormValid(
      Object.values(formData).every((value) => value !== "") &&
      Object.values(errors).every((e) => e === "")
    );
  }, [formData, errors]);

  const handleRegister = async () => {
    if (!isFormValid) return;

    const success = await register(formData);
    if (success) {
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 70} 
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <View style={styles.logoSection}>
            <Image style={styles.logo} source={require("../../shared/assets/registration.png")} />
          </View>

          <RegisterForm 
            formData={formData} 
            errors={errors} 
            onChange={handleChange} 
            onRegister={handleRegister} 
            isFormValid={isFormValid} 
            loading={loading} 
            navigation={navigation} 
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
