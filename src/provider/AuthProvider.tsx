
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, User} from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: "select_account"
})
const GithubProvider = new GithubAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
export {GoogleProvider,GithubProvider,FacebookProvider};
