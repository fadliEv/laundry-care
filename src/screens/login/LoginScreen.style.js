import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FF8C00",
    height: height * 0.2, // Sama dengan LoginScreen agar serasi
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  logoSection: {
    alignItems: "center",
    marginTop: 30, // Sama seperti di LoginScreen
  },
  logo: {
    width: 300, 
    height: 200, 
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#F8F8F8",
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  registerButton: {
    width: "100%",
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: "#333",
  },
  loginLink: {
    color: "#FF8C00",
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row", // Supaya teks sejajar horizontal
    alignItems: "center",
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: "#333",
  },
  registerLink: {
    color: "#FF8C00",
    fontWeight: "bold",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#FF8C00",
    fontSize: 14,
    marginBottom: 20,
  },

  loginButton: {
    width: "90%",
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
