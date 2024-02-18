import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALwsct-xekszGeYBvD39gIu591WvEUwj4",
  authDomain: "bookmyseat-c872b.firebaseapp.com",
  projectId: "bookmyseat-c872b",
  storageBucket: "bookmyseat-c872b.appspot.com",
  messagingSenderId: "955762662013",
  appId: "1:955762662013:web:7978be94b7ad9ff6b9ef14",
  measurementId: "G-90T1LQQPZ9"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBjKtZrZ_nkLkGc7goLbLX8HHQ_WlYon5s",
//   authDomain: "bookmyseat-75b13.firebaseapp.com",
//   projectId: "bookmyseat-75b13",
//   storageBucket: "bookmyseat-75b13.appspot.com",
//   messagingSenderId: "869849498277",
//   appId: "1:869849498277:web:07a38dd60525b8a88f434c"
// };

// const firebaseConfig = {
//   apiKey: `${process.env.apiKey}`,
//   authDomain: `${process.env.authDomain}`,
//   projectId: `${process.env.projectId}`,
//   storageBucket: `${process.env.storageBucket}`,
//   messagingSenderId: `${process.env.messagingSenderId}`,
//   appId: `${process.env.appId}`,
// }

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app)