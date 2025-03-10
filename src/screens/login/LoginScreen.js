import React, { useEffect, useState } from "react";
import { View, Text, Image, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import useAuth from "../../hooks/useAuth"; 
import styles from "./LoginScreen.style";
import InputField from "../../shared/components/input/InputField";
import Button from "../../shared/components/button/Button";
import { validateLoginForm } from "./loginValidation"; 

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (field, value) => {
    const error = validateLoginForm(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));

    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
  };

  useEffect(() => {
    setIsFormValid(
      email !== "" &&
      password !== "" &&
      Object.values(errors).every((e) => e === "")
    );
  }, [email, password, errors]);

  
  const handleLogin = async () => {
    if (!isFormValid) return; 

    const success = await login(email, password);
    if (!success) setErrors((prev) => ({ ...prev, password: "Email atau password salah!" }));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.headerText}>Masuk</Text>
          </View>
          <View style={styles.logoSection}>
            <Image style={styles.logo} source={require("../../shared/assets/login.png")} />
          </View>

          <View style={styles.content}>
            <Text style={styles.appTitle}>LaundryCare</Text>
            <Text style={styles.subTitle}>Laundry Super App</Text>

            <InputField 
              placeholder="Email" 
              keyboardType="email-address" 
              value={email} 
              onChangeText={(text) => handleChange("email", text)}  
              error={errors.email}
            />
            <InputField 
              placeholder="Kata Sandi" 
              secureTextEntry={secureTextEntry} 
              value={password} 
              onChangeText={(text) => handleChange("password", text)}  
              onToggleSecure={() => setSecureTextEntry(!secureTextEntry)} 
              error={errors.password} 
            />

            <Button 
              title="Masuk" 
              onPress={handleLogin} 
              loading={loading} 
              disabled={!isFormValid}
            />

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Belum mempunyai akun?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}><Text style={styles.registerLink}> Daftar</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
