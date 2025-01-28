import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwSoAPucWoM-GUOHjQcdv2fNHA_AJEFUc",
  authDomain: "netflix-clone-d7efc.firebaseapp.com",
  projectId: "netflix-clone-d7efc",
  storageBucket: "netflix-clone-d7efc.firebasestorage.app",
  messagingSenderId: "772310348778",
  appId: "1:772310348778:web:9fd15c90beb3df8fc3f893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const signup = async (name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email,password)=>{
    try {
        signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        alert(error)
    }
}
const logout = ()=>{
    signOut(auth)
}
export{auth,db,login,logout,signup};