'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import axios from "axios";

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    work: 'Chef', // Default value
    mobile: '',
    email: '',
    salary: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await axios.post('https://hotels-27n7.onrender.com/person', formData);
      return response;
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Employee Information</CardTitle>
        <CardDescription>Please fill in the employee details</CardDescription>
      </CardHeader>
      <CardContent>
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
            <select id="work" name="work" value={formData.work} onChange={handleChange} required className="block w-full p-2 border rounded">
              <option value="chef">chef</option>
              <option value="manager">manager</option>
              <option value="waiter">waiter</option>
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
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
}
