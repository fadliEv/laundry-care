import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  logoSection: {
    alignItems: "center",
    marginTop: 30,    
  },
  logo: {
    width: 270, 
    height: 150, 
    resizeMode: "contain",
  },
  content: {
    alignItems: "center",
    padding: 20,
    width: "100%",
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
    marginBottom: 10,
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
  errorText: {
    width: "100%",  
    textAlign: "left", 
    color: "red",
    fontSize: 12, 
    marginBottom: 10, 
    paddingLeft: 10, 
  },
});

export default styles;
