import { GithubAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);


    const provider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const handleGoogleSignIn= ()=>{
        console.log(auth, provider)
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result.user)
            setUser(result.user);
        })
        .catch(error =>{
            console.log('error', error);
            setUser(null);
        })
    }
    
    const handleSignOut=() =>{
        signOut(auth)
        .then(() =>{
            console.log('sign out done');
            setUser(null);
        })
        .catch(error => console.log(error))
    }

    const handleGithubSignIn=()=>{
        console.log(auth, GithubProvider)
        signInWithPopup(auth, GithubProvider)
        .then((result) =>{
            console.log(result.user)
            setUser(result.user);
        })
        .catch(error =>{
            console.log('error', error);
            setUser(null);
        })
    }



    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ? 
                <button onClick={handleSignOut}>Sign Out</button> 
                : 
                <>
                <button onClick={handleGoogleSignIn}>Login with google</button>
                <button onClick={handleGithubSignIn}>Login with Github</button>
                </>
            }
            
            
            {user && <div>
                <h4>{user.displayName}</h4>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;