import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/login', { email, password });
            alert(response.data.message);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            alert(error.response.data.message);
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/register', { email, password });
            alert(response.data.message);
        } catch (error) {
            console.error('Error al registrar', error);
            alert(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8  bg-opacity-80" style={{ backgroundImage: `url('https://masencarnacion.s3.us-west-2.amazonaws.com/uploads/public/641/c8a/624/641c8a62463ad110324282.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg bg-opacity-80">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">{isRegistering ? 'Registro' : 'Iniciar sesión'}</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={isRegistering ? handleRegister : handleLogin}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-lg block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <button
                                type="button"
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                {isRegistering ? 'Ya tienes una cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {isRegistering ? 'Registrar' : 'Iniciar sesión'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
