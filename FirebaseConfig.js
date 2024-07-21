// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configurações do Firebase do seu aplicativo da web
const firebaseConfig = {

  apiKey: "AIzaSyBSAbgxyCraoJCZuWrdWrShGWBBnn5_wto",
  authDomain: "rapo-creative.firebaseapp.com",
  projectId: "rapo-creative",
  storageBucket: "rapo-creative.appspot.com",
  messagingSenderId: "162176023378",
  appId: "1:162176023378:web:8ff698a399a6b52a0f9ee3",
  measurementId: "G-XWC9YF1H4N"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar o Firestore para uso em outros arquivos
export { db };
