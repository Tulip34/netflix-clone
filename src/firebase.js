import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxpg8HjF7XLXYl63xIF8H4y0K7IkiW3c0",
  authDomain: "netflix-clone-f0bc5.firebaseapp.com",
  projectId: "netflix-clone-f0bc5",
  storageBucket: "netflix-clone-f0bc5.appspot.com",
  messagingSenderId: "730326596870",
  appId: "1:730326596870:web:9119dfbb8046cb68007287"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error)
        alert(error);
    }
}
const login =async (email,password)=>{
    try {
        signInWithEmailAndPassword
    } catch (error) {
        console.log(error)
        alert(error)
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}