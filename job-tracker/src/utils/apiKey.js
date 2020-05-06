let apiKey;
if (process.env.NODE_ENV !== "production") {
  apiKey = process.env.REACT_APP_FIREBASE_KEY;
} else {
  apiKey = process.env.FIREBASE_KEY;
}

export default apiKey;
