import SimpleLogin from "./SimpleLogin";
import ThirdPartyLoginGroup from "./ThirdPartyLoginGroup";

function Login(){
    return(
        <div className=" d-flex justify-content-center w-100 pt-5">
            <div className="login-form w-40 p-3   border-rounded shadow">
                <h4>Connectez-vous !</h4>
                <SimpleLogin />
                <p className="mt-3 mb-0 text-center text-muted">Ou bien connectez-vous avec:</p>
                <hr className="mt-0 mb-2"/>
                <ThirdPartyLoginGroup />
            </div>
        </div>
        
    )
}
export default Login;