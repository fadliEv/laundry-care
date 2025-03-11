import { isValidEmail } from "../../shared/validations/formatValidations";

export const validateLoginForm = (field, value, password = "") => {
    let errorMessage = "";
  
    switch (field) {
  
      case "password":
        if (!value) {
          errorMessage = "Password tidak boleh kosong!";
        }
        break;
  
      default:
        break;
    }
  
    return errorMessage;
};
  