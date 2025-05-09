import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = ({ onAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      onAuth(); // Notifica que el usuario se autenticó
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error en la autenticación');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Correo" className="w-full border p-2" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Contraseña" className="w-full border p-2" />
          {msg && <p className="text-red-500">{msg}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
