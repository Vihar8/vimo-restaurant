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

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://hotels-27n7.onrender.com/person/signup', post)
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
  );
}

export default Page;
