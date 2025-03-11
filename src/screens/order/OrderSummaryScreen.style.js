import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 10,
  },
  subHeaderText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  infoContainer: {
    backgroundColor: "#FFF7E6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF8C00",
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
  },
  serviceText: {
    fontSize: 16,
    flex: 1,
    fontWeight: "bold",
    marginLeft: 10,
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
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalPrice: {
    fontSize: 22,
    color: "#FF8C00",
    fontWeight: "bold",
    marginTop: 5,
  },
  homeButton: {
    flexDirection: "row",
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 20,
  },
  homeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
