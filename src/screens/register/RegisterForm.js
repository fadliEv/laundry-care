import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style/RegisterForm.style";
import InputField from "../../shared/components/input/InputField";
import Button from "../../shared/components/button/Button";
import { SCREEN_PATH } from "../../navigation/PathNavigator";

const RegisterForm = ({ formData, errors, onChange, onRegister, isFormValid, loading, navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);

  return (
    <View style={styles.content}>
      <Text style={styles.appTitle}>LaundryCare</Text>
      <Text style={styles.subTitle}>Buat Akun Baru</Text>

      <InputField 
        placeholder="Nama Lengkap"
        value={formData.name} 
        onChangeText={(text) => onChange("name", text)} 
        error={errors.name}
      />
      <InputField 
        placeholder="Nomor Telepon"
        keyboardType="phone-pad"
        value={formData.phoneNumber} 
        onChangeText={(text) => onChange("phoneNumber", text)} 
        error={errors.phoneNumber}
      />
      <InputField 
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email} 
        onChangeText={(text) => onChange("email", text)} 
        error={errors.email}
      />
      <InputField 
        placeholder="Alamat"
        value={formData.address} 
        onChangeText={(text) => onChange("address", text)} 
        error={errors.address}
      />
      <InputField 
        placeholder="Kata Sandi"
        secureTextEntry={secureTextEntry} 
        value={formData.password} 
        onChangeText={(text) => onChange("password", text)} 
        onToggleSecure={() => setSecureTextEntry(!secureTextEntry)} 
        error={errors.password}
      />
      <InputField 
        placeholder="Konfirmasi Kata Sandi"
        secureTextEntry={secureConfirmTextEntry} 
        value={formData.confirmPassword} 
        onChangeText={(text) => onChange("confirmPassword", text)} 
        onToggleSecure={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)} 
        error={errors.confirmPassword}
      />

      <Button 
        title="Daftar" 
        onPress={onRegister} 
        loading={loading} 
        disabled={!isFormValid} 
      />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Sudah punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_PATH.LOGIN)}>
          <Text style={styles.loginLink}> Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
