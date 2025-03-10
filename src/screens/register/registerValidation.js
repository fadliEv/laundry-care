import { isValidEmail, isValidName, isValidPhoneNumber } from "../../shared/validations/formatValidations";

export const validateRegisterForm = (field, value, formData) => {
  let errorMessage = "";

  switch (field) {
    case "name":
      if (!value) {
        errorMessage = "Nama tidak boleh kosong!";
      } else if (!isValidName(value)) {
        errorMessage = "Nama hanya boleh mengandung huruf dan spasi!";
      }
      break;

    case "phoneNumber":
      if (!value) {
        errorMessage = "Nomor telepon tidak boleh kosong!";
      } else if (!isValidPhoneNumber(value)) {
        errorMessage = "Nomor telepon hanya boleh berisi angka!";
      }
      break;

    case "email":
      if (!value) {
        errorMessage = "Email tidak boleh kosong!";
      } else if (!isValidEmail(value)) {
        errorMessage = "Format email tidak valid!";
      }
      break;

    case "address":
      if (!value) errorMessage = "Alamat tidak boleh kosong!";
      break;

    case "password":
      if (!value) {
        errorMessage = "Password tidak boleh kosong!";
      } else if (value.length < 6) {
        errorMessage = "Password harus minimal 6 karakter!";
      }
      break;

    case "confirmPassword":
      if (!value) {
        errorMessage = "Konfirmasi password tidak boleh kosong!";
      } else if (value !== formData.password) {
        errorMessage = "Konfirmasi password tidak sesuai!";
      }
      break;

    default:
      break;
  }

  return errorMessage;
};
