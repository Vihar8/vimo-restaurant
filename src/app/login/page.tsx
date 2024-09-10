'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast'; // For showing feedback messages
import { useRouter } from 'next/navigation'; // For page redirection

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const router = useRouter(); // Initialize the router
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://hotels-27n7.onrender.com/person/login', loginData) // Replace with your login API
      .then((response) => {
        // Assuming the backend sends a token on successful login
        if (response.data.token) {
          localStorage.setItem('token', response.data.token); // Store the token in localStorage
          toast.success('Login Successful! Redirecting...'); // Show success toast
          setTimeout(() => {
            router.push('/'); // Redirect to homepage after login success
          }, 2000); // Delay for toast visibility
        } else {
          toast.error('Login failed. No token returned.');
        }
      })
      .catch((err) => {
        toast.error('Login Failed. Please check your credentials.'); // Show error toast
        console.log(err);
      });
  };

  return (
    <div>
   <nav className="bg-gradient-to-r from-white/30 via-white/50 to-white/30 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="m-2 w-[46px]">
              <a href="/">
                <img src="/vimo.png" alt="Vimo" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
              <a href="#home" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
                <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Home</span>
              </a>
              {/* Login and Signup Buttons */}
              
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={() => router.push('/signup')}
              >
                Signup
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Links */}
          {isMenuOpen && (
            <div className="md:hidden">
              <a href="#home" className="block text-gray-700 hover:text-red-500 px-4 py-2">Home</a>
              {/* Login and Signup Links for Mobile */}
              <a href="/signup" className="block text-gray-700 hover:text-red-500 px-4 py-2">Signup</a>
            </div>
          )}
        </div>
      </nav>         
    <div className="relative w-full max-w-lg mx-auto p-6 space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-green-100">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-gray-600">Please enter your credentials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" type="text" value={loginData.username} onChange={handleInput} required />
            </div>
            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={loginData.password} onChange={handleInput} required />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}

export default LoginPage;
