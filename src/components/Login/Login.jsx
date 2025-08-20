import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { signInWithPopup } from "firebase/auth";

const Login = () => {

    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn= ()=>{
        console.log(auth, provider)
        signInWithPopup(auth, provider)
        .then((result) =>{
            console.log(result)
        })
        .catch(error =>{
            console.log('error', error);
        })
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with google</button>
        </div>
    );
};

export default Login;