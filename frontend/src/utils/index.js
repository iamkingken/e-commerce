export const shortenText = (text, n) => {
  if (text.lenght > n) {
    const shoretenedText = text.substring(0, n).concat("...");
    return shoretenedText;
  }
  return text;
};

// Validate Email
export const validateEmail = (email) => {
  return email.match();
};
