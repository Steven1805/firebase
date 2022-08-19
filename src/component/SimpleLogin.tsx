import { signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";
import { useContext, useRef, useState } from "react";

import { auth } from "../configs/firebase";

function SimpleLogin(){
    const [errorMessage,setErrorMessage] = useState<string | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement| null>(null);
    const signIn = async () =>{
        let email = emailRef.current?.value;
        let password = passwordRef.current?.value;
        if(email && password){
            try{
                await signInWithEmailAndPassword(auth,email,password);
            }
            catch(error){
                console.log(error);
                setErrorMessage("Vous n'avez pas accès à l'application, désolé");
            }
        }
        else{
            setErrorMessage("Veuillez remplir les champs svp !");
        }
       
    };
    return (
        <div className="form-group">
            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div>: ""}
            <label>Email</label>
            <input className="form-control mt-1 mb-3" ref={emailRef} type="text"/>
            <label>Mot de passe</label>
            <input className="form-control mt-1" ref={passwordRef} type="password"/>
                <button className="btn w-100 btn-primary mt-3" onClick={signIn}>Se connecter</button>
        </div>
    )
}
export default SimpleLogin;