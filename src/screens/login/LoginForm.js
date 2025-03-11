import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style/LoginForm.style";
import InputField from "../../shared/components/input/InputField";
import Button from "../../shared/components/button/Button";
import { SCREEN_PATH } from "../../navigation/PathNavigator";

const LoginForm = ({ formData, errors, secureTextEntry, onToggleSecure, onChange, onLogin, isFormValid, loading, navigation }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.appTitle}>LaundryCare</Text>
      <Text style={styles.subTitle}>Laundry Super App</Text>

      <InputField 
        placeholder="username"         
        value={formData.username} 
        onChangeText={(text) => onChange("username", text)}  
        error={errors.username}
      />
      <InputField 
        placeholder="Kata Sandi" 
        secureTextEntry={secureTextEntry} 
        value={formData.password} 
        onChangeText={(text) => onChange("password", text)}  
        onToggleSecure={onToggleSecure} 
        error={errors.password} 
      />

      <Button 
        title="Masuk" 
        onPress={onLogin} 
        loading={loading} 
        disabled={!isFormValid}
      />

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Belum mempunyai akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_PATH.REGISTER)}>
          <Text style={styles.registerLink}> Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
