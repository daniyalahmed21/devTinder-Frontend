import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../src/utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [emailId, setEmailId] = useState("abc@gmail.com");
  const [password, setPassword] = useState("abc123");
  const [error,setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form submission reload
  
    try {
      const response = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      },{
        withCredentials:true
      });
      
    dispatch(addUsers(response.data))
    navigate("/feed")
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError("Login failed. Please check your credentials.")
    }
  };

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmailId(e.target.value)}
            value={emailId}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2.5 rounded-lg transition-colors">
          Login
        </button>
        <p className="text-red-400">{error}</p>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="#" className="text-gray-600 hover:text-gray-500 font-medium">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
