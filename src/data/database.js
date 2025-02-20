// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, writeBatch, addDoc } from "firebase/firestore";
import PRODUCTS from "./data";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAECLv9Ea3wLDAmUAGaMsTekPQzVUrcz3E",
  authDomain: "react-proyecto-daee7.firebaseapp.com",
  projectId: "react-proyecto-daee7",
  storageBucket: "react-proyecto-daee7.firebasestorage.app",
  messagingSenderId: "333819973567",
  appId: "1:333819973567:web:dc665fbbca23aab5041b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function getData() {
    const collectionRef = collection(db, 'productos')
    const productsSnapshot = await getDocs(collectionRef)

    const documentsData = productsSnapshot.docs.map((doc) => {
                                                                return {...doc.data(), id: doc.id}
                                                            })
    return documentsData
}

export async function getDataById(id) {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data()
    return docData
}

export async function getDataByCategory(category) {
    const productsColRef = collection(db, "productos")
    const q = query(productsColRef, where("category", "==", category))

    const productsSnapshot = await getDocs(q)
    const documentsData = productsSnapshot.docs.map((doc) => {
                                                                return {...doc.data(), id: doc.id}
                                                            })
    return documentsData
}

export async function exportProductsToDB() {
    for(let item of PRODUCTS){
        delete item.id
        const docID = await addDoc( collection(db, "productos"), item)
        console.log(`Creando documento ${docID}`)
    }
}

export async function CreateBuyOrder(orderData) {
    try {
        const newOrderRef = await addDoc(collection(db, "Compras"), orderData);
        return { id: newOrderRef.id }; // Retorna un objeto con la propiedad 'id'
    } catch (error) {
        console.error("Error creating buy order:", error);
        throw error; 
    }
}