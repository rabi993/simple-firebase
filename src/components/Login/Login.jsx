

const Login = () => {

    const handleGoogleSignIn= ()=>{
        console.log("google comming soon")
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with google</button>
        </div>
    );
};

export default Login;