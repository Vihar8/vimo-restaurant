'use client';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import axios from "axios";
import Loading from '@/components/Loading';

interface Person {
  id: number;
  name: string;
  email: string;
  work: string;
  age: number;
  mobile: string;
  salary: number;
}

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    work: 'chef',
    mobile: '',
    email: '',
    salary: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState<Person[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://hotels-27n7.onrender.com/person')
      .then(response => setData(response.data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  if (!data) {
    return <div className="flex justify-center items-center h-screen"><Loading /></div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hotels-27n7.onrender.com/person', formData);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return response;
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto p-6 space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-green-100">
          <CardTitle className="text-2xl">Employee Information</CardTitle>
          <CardDescription className="text-gray-600">Please fill in the employee details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required min="18" max="100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="work">Work</Label>
              <select id="work" name="work" value={formData.work} onChange={handleChange} required className="block w-full p-2 border rounded focus:ring-green-500">
                <option value="chef">Chef</option>
                <option value="manager">Manager</option>
                <option value="waiter">Waiter</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required pattern="[0-9]{10}" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" name="salary" type="number" value={formData.salary} onChange={handleChange} required min="0" step="0.01" />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Submit</Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-5 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Employee Data</h1>
        <ul className="space-y-2">
          {data.map(person => (
            <li key={person.id} className="p-2 bg-green-100 rounded hover:bg-green-200 transition">
              <span className="font-semibold">{person.name}</span> - {person.email} - {person.work}
            </li>
          ))}
        </ul>
      </div>

      {showPopup && (
        <div className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded shadow-md">
          Your input has been submitted!
        </div>
      )}
    </div>
  );
}
