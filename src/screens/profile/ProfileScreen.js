import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SCREEN_PATH } from "../../navigation/PathNavigator";
import styles from "./ProfileScreen.style";
import authService from "../../services/authService";
import { Alert } from "react-native";
import localStorage from "../../utils/localStorage";

const ProfileScreen = ({ navigation }) => {  


  const handleLogout = async () => {
    Alert.alert(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Ya",
          onPress: async () => {
            try {
              await authService.logout();              
            } catch (error) {
              Alert.alert("Terjadi Kesalahan", `Gagal logout: ${error}`);
            }
          },
        },
      ]
    );
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: "https://imgs.search.brave.com/uLARhH16ug7xgUl3msl3yHs0DCWkofOAnLVeWQ-poy0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzI1Mi0y/NTI0Njk1X2R1bW15/LXByb2ZpbGUtaW1h/Z2UtanBnLWhkLXBu/Zy1kb3dubG9hZC5w/bmc" }} 
          style={styles.profileImage} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Fadli</Text>
          <Text style={styles.profileEmail}>+629878920901</Text>
          <Text style={styles.profileEmail}>fadlirahmanfauzan04@gmail.com</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate(SCREEN_PATH.CHANGE_PROFILE)}
        >
          <Ionicons name="person-outline" size={24} color="#FF8C00" />
          <Text style={styles.menuText}>Change Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => navigation.navigate(SCREEN_PATH.CHANGE_PASSWORD)}
        >
          <Ionicons name="lock-closed-outline" size={24} color="#FF8C00" />
          <Text style={styles.menuText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
