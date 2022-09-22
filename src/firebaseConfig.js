
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDecnhTwjv2PE_136M85lcGa6dBcLnYQGY",
    authDomain: "prueba-b2cb1.firebaseapp.com",
    projectId: "prueba-b2cb1",
    storageBucket: "prueba-b2cb1.appspot.com",
    messagingSenderId: "238459642659",
    appId: "1:238459642659:web:23e575ce68353cb90ca296"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;