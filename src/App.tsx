import { useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import {User} from "firebase/auth";
import { auth } from "./configs/firebase";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return (<AuthContext.Provider  value={user}>
    <div className="container">
      {user? <Home />:<Login />}
    </div>
    
  </AuthContext.Provider>);
}

export default App;
