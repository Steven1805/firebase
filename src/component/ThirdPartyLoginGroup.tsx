import { FacebookProvider, GithubProvider, GoogleProvider } from "../provider/AuthProvider";
import ThirdPartyLogin, { ThirdPartyLoginProps } from "./ThirdPartyLogin";

function ThirdPartyLoginGroup(){

    return (
        <div className="d-flex justify-content-between">
            <ThirdPartyLogin provider={GoogleProvider} name={"google"} />
            <ThirdPartyLogin provider={GithubProvider} name={"github"} />
            <ThirdPartyLogin provider={FacebookProvider} name={"facebook"} />
        </div>
    )
}
export default ThirdPartyLoginGroup;