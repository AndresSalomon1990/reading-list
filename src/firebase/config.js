import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB329zb2GRlQUzRMbAZYkLdTe73EVvpOPc',
  authDomain: 'reading-list-app-4d615.firebaseapp.com',
  projectId: 'reading-list-app-4d615',
  storageBucket: 'reading-list-app-4d615.appspot.com',
  messagingSenderId: '607643365523',
  appId: '1:607643365523:web:1b5ad586f6c9aaf84f9d66',
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
