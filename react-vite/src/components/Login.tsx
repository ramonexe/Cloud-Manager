import '../styles/Login.css';

export function Login() {
    return (
        <>
            <div className='Login-container'>
                <div className='Login'>
                    <h1 className='Logintext'>Login</h1>
                    <p className='Logintext'>Username</p>
                    <input className='Inputstyle' type="Username" />
                    <p className='Logintext'>Password</p>
                    <input className='Inputstyle' type="Password" />
                    <button className='Loginbutton'>Login</button>
                </div>
            </div>
        </>
    );
}