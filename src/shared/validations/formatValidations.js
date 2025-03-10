export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  export const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi
    return nameRegex.test(name);
  };
  
  export const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]+$/; // Hanya angka
    return phoneRegex.test(phoneNumber);
  };
  