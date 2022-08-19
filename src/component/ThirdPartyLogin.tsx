import { signInWithPopup } from "firebase/auth";
import { auth } from "../configs/firebase";

export interface ThirdPartyLoginProps{
    provider: any;
    name: string;
}

const ThirdPartyLogin: React.FC <ThirdPartyLoginProps> = (props : ThirdPartyLoginProps) => {
    const {name,provider} = props;
    const signIn = async () =>{
        try{
            await signInWithPopup(auth,provider);
        }
        catch(error:any){
            
        }
    }
    return(
        <button className="btn btn-primary" onClick={signIn}>{name}</button>
    )
}
export default ThirdPartyLogin;