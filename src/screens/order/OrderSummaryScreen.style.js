import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 5,
  },
  subHeaderText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },
  infoContainer: {
    backgroundColor: "#FFF7E6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  serviceCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  serviceFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  serviceQuantity: {
    fontSize: 14,
    fontWeight: "bold",
  },
  servicePrice: {
    fontSize: 16,
    color: "#FF8C00",
    fontWeight: "bold",
  },
  totalContainer: {
    backgroundColor: "#FFEDD5",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection : "row",
    justifyContent : 'space-between'
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    color: "#FF8C00",
    fontWeight: "bold",
    textAlign: "right",
  },
  additionalInfo: {
    backgroundColor: "#FFF3CD",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  additionalText: {
    fontSize: 14,
    color: "#856404",
    marginLeft: 5,
    
  },
  homeButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  homeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
