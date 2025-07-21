// services/products.service.js
import { db } from '../firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';

// Referencia a la colección 'products' en Firestore
const productsCollection = collection(db, 'products');

// Obtener todos los productos
export async function getAllProducts() {
  const snapshot = await getDocs(productsCollection);
  const products = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return products;
}

// Obtener producto por ID
export async function getProductById(id) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  return { id: docSnap.id, ...docSnap.data() };
}

// Crear un producto nuevo
export async function createProduct(productData) {
  const docRef = await addDoc(productsCollection, productData);
  return { id: docRef.id, ...productData };
}

// Eliminar producto por ID
export async function deleteProductById(id) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  await deleteDoc(docRef);
  return { id };
}

// Actualizar producto (opcional)
export async function updateProductById(id, updateData) {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  await updateDoc(docRef, updateData);
  return { id, ...updateData };
}
