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
    marginBottom: 10,
  },
  dropdown: {
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#FF8C00",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  servicePrice: {
    fontSize: 14,
    color: "gray",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    color: "#FF8C00",
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
