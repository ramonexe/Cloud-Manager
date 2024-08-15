import '../styles/Login.css';

export function Login() {
    return (
        <>
            <div className='Login-container'>
            <h1 className='Logologin'>CManager</h1>
                <div className='Login'>
                    <h1 className='Logintext, titillium-web-bold'>Plataform Access</h1>
                    <p className='Logintext, titillium-web-light'>Username</p>
                    <input className='Inputstyle' type="Username" />
                    <div className='Password-div'>
                    <p className='Logintext, titillium-web-light'>Password</p>
                    <p className='Logintext, titillium-web-light'><a href="#" className='custom-link'>Forget password?</a></p>
                    </div>
                    <input className='Inputstyle' type="Password" />
                    <button className='Loginbutton'>Login</button>
                    <p className='Signuptext'>Need an account?<a href="#" className='custom-link'>Sign-up</a></p>
                </div>
            </div>
        </>
    );
}