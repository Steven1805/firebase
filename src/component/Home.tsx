import { auth } from "../configs/firebase";

function Home(){
    const signOut = async () =>{
        await auth.signOut();
    }
    return(
        <div className="w-100 h-100 flex-column d-flex justify-content-center align-items-center">
            <p className="display-4">Vous êtes authentifié.</p>
            <div>
            <button className="btn btn-danger btn-lg" onClick={signOut}>Se déconnecter</button>
            </div>
        </div>
    )
}
export default Home;