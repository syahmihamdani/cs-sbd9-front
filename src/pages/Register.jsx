import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('cs-sbd9-back-syahmi.vercel.app/user/register',
        {},
        {
          params: { name, email, password },
          withCredentials: true
        }
      );
      navigate('/login');
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Unknown error';
      alert('Registration failed: ' + msg);
    }
  };

  return (
    <div className="min-h-screen w-screen flex">
      {/* Left - Form (1/3) */}
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white shadow-md z-10">
        <form onSubmit={handleRegister} className="w-full max-w-sm">
          {/* Logo and ShopHaven text */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <img src="/logo.jpg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-red-600">ShopHaven</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center text-black">Register</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-2 border rounded bg-gray-200 text-black placeholder-gray-400"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Register
          </button>
          <p className="text-sm text-center mt-4 text-black">
            Already have an account?{' '}
            <Link to="/login" className="text-red-600 hover:underline hover:text-gray-600">
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:flex w-2/3 relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/background-video-2.mp4" 
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

export default Register;
