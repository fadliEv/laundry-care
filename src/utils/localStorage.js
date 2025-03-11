import AsyncStorage from "@react-native-async-storage/async-storage";

const localStorage = {
  setData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key,value);
    } catch (error) {
      console.error("Error setting data:", error);
    }
  },

  getData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) return value
    } catch (error) {
      console.error("Error getting data:", error);
    }
  },

  removeData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data:", error);
    }
  },
};

export default localStorage;
