// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDocs, doc} from "firebase/firestore";
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

import productos from './data'

export default function getData() {
    console.log(`Solicitando datos...`)
    const promesa = new Promise((resolve, reject) => {

        const data = false
        setTimeout(() => {
            if (data) reject(`Ocurrio un error`)
            
            resolve(productos)
        }, 2500);
    })
    return promesa
} 


export function getDataById(id) {
    console.log(`Solicitando datos del producto...`)
    const promesa = new Promise((resolve, reject) => {

        const data = false
        setTimeout(() => {
            if (data) reject(`Ocurrio un error al traer los datos del producto`)
            
            const requestId = productos.find(producto => producto.id === Number(id))
            resolve(requestId)
        }, 500);
    })
    return promesa
}

export function getDataByCategory(category) {
    console.log(`Solicitando datos del producto...`)
    const promesa = new Promise((resolve, reject) => {

        const data = false
        setTimeout(() => {
            if (data) reject(`Ocurrio un error al traer los datos del producto`)
            
            const requestCategory = productos.filter(productos => productos.category.toLowerCase() === category.toLowerCase())
            resolve(requestCategory)
        }, 500);
    })
    return promesa
} 

/* 
export default async function getData() {
    const collectionRef = collection(db, 'productos')
    const productsSnapshot = getDocs(collectionRef)

    const documentsData = productsSnapshot.docs.map((doc) => doc.data())
    return documentsData
}

export async function getDataById(id) {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDocs(docRef)
    const docData = docSnapshot.data()
    return docData
} */