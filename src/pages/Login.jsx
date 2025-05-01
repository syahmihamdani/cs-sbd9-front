import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://cs-sbd9-back-syahmi.vercel.app/user/login', {}, {
        params: { email, password },
        withCredentials: true
      });
      navigate('/home');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen w-screen flex bg-white">
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white shadow-md z-10">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-10">
            <img src="/logo.jpg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-red-600">ShopHaven</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center text-black">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded bg-gray-200 text-black placeholder-gray-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded bg-gray-200 text-black placeholder-gray-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-black">
            Don't have an account?{' '}
            <Link to="/register" className="text-red-600 hover:underline hover:text-gray-600">
              Register here
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:flex w-2/3 relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/background-video-1.mp4" 
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
      </div>
    </div>
  );
}

export default Login;
