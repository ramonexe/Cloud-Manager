import '../styles/Login.css';

export function Login(){
    return(
        <>
            <div className='Login-container'>
                <h1>Login</h1>
                <p>Username</p>
                <input type="Username" />
                <p>Password</p>
                <input type="Password" />
                <button>Login</button>
            </div>
        </>
    );
}