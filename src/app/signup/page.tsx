'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast'; // Toast library
import { useRouter } from 'next/navigation'; // Next.js router for redirection

function Page() {
  const [post, setPost] = useState({
    name: '',
    age: '',
    work: '',
    mobile: '',
    email: '',
    salary: '',
    username: '',
    password: ''
  });

  const router = useRouter(); // Initialize the router

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/person/signup', post)
      .then((response) => {
        toast.success('Signup Successful! Redirecting to login...'); // Show success toast
        setTimeout(() => {
          router.push('/login'); // Redirect to login page after 2 seconds
        }, 2000); // Delay for toast visibility
      })
      .catch((err) => {
        toast.error('Signup Failed. Please try again.'); // Show error toast
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
              <a href="/" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
                <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Home</span>
              </a>
              {/* Login and Signup Buttons */}
              
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={() => router.push('/login')}
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
              <a href="/" className="block text-gray-700 hover:text-red-500 px-4 py-2">Home</a>
              {/* Login and Signup Links for Mobile */}
              <a href="/login" className="block text-gray-700 hover:text-red-500 px-4 py-2">login</a>
            </div>
          )}
        </div>
      </nav>
    <div className="relative w-full max-w-lg mx-auto p-6 space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-green-100">
          <CardTitle className="text-2xl">Sign Up For Employee Information</CardTitle>
          <CardDescription className="text-gray-600">Please fill in the employee details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" value={post.name} onChange={handleInput} required />
            </div>
            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" value={post.age} onChange={handleInput} required min="18" max="100" />
            </div>
            {/* Work */}
            <div className="space-y-2">
              <Label htmlFor="work">Work</Label>
              <select id="work" name="work" value={post.work} onChange={handleInput} required className="block w-full p-2 border rounded focus:ring-green-500">
                <option value="">Select Job Role</option>
                <option value="chef">Chef</option>
                <option value="manager">Manager</option>
                <option value="waiter">Waiter</option>
              </select>
            </div>
            {/* Mobile */}
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" name="mobile" type="tel" value={post.mobile} onChange={handleInput} required pattern="[0-9]{10}" />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={post.email} onChange={handleInput} required />
            </div>
            {/* Salary */}
            <div className="space-y-2">
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" name="salary" type="number" value={post.salary} onChange={handleInput} required min="0" step="0.01" />
            </div>
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" type="text" value={post.username} onChange={handleInput} required />
            </div>
            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={post.password} onChange={handleInput} required />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}

export default Page;
