import { Link } from "react-router-dom";

export default function LoginPage(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mt-16">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="email address" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Register new account!  <Link className="underline text" to={'/register'}>Register</Link>
                    </div>
                </form>
                </div>
            </div>
            
    );
}