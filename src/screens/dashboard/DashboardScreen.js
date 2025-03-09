import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import HomeScreen from "../home/HomeScreen";
import useAuth from "../../hooks/useAuth";

const DashboardScreen = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <View style={{ flex: 1 }}>
      {activeTab === "Home" && <HomeScreen />}
      {activeTab === "Order" && <Text style={{ textAlign: "center", marginTop: 20 }}>Order Screen</Text>}
      {activeTab === "Promo" && <Text style={{ textAlign: "center", marginTop: 20 }}>Promo Screen</Text>}
      {activeTab === "Profile" && <Text style={{ textAlign: "center", marginTop: 20 }}>Profile Screen</Text>}

      {/* Bottom Navigation */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "#f8f8f8", borderTopWidth: 1, borderTopColor: "#ddd" }}>
        <TouchableOpacity onPress={() => setActiveTab("Home")}>
          <Text style={activeTab === "Home" ? { fontWeight: "bold" } : {}}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Order")}>
          <Text style={activeTab === "Order" ? { fontWeight: "bold" } : {}}>🛒 Order</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Promo")}>
          <Text style={activeTab === "Promo" ? { fontWeight: "bold" } : {}}>🎉 Promo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Profile")}>
          <Text style={activeTab === "Profile" ? { fontWeight: "bold" } : {}}>👤 Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Button title="Logout" color="red" onPress={logout} />
      </View>
    </View>
  );
};

export default DashboardScreen;
