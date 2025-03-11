import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF7E6",
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  serviceQuantity: {
    fontSize: 16,
    color: "#555",
  },
  servicePrice: {
    fontSize: 16,
    color: "#FF8C00",
    fontWeight: "bold",
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF8C00",
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
