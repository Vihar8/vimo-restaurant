'use client';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
import Loading from '@/components/Loading';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  taste: string;
  isDrink: boolean;
  ingredients: string;
  numSales: number;
}

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    taste: '',
    isDrink: false,
    ingredients: '',
    numSales: '',
  });

  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch menu items using Axios
    axios.get('https://hotels-gamp.onrender.com/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => setError(error.message));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTasteChange = (value: string) => {
    setFormData(prev => ({ ...prev, taste: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hotels-gamp.onrender.com/menu', formData);
      console.log('Form submitted successfully', response);
      setMenuItems(prevMenuItems => prevMenuItems ? [...prevMenuItems, response.data] : [response.data]); // Update UI with new item
    } catch (err) {
      console.log('Error', err);
    }
  };

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  if (!menuItems) {
    return <div className="flex justify-center items-center h-screen"><Loading /></div>;
  }

  return (
    <div className="relative w-full max-w-lg mx-auto p-6 space-y-8">
      <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Food/Drink Item Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter item name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="taste">Taste</Label>
            <Select onValueChange={handleTasteChange}>
              <SelectTrigger id="taste">
                <SelectValue placeholder="Select taste" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sweet">Sweet</SelectItem>
                <SelectItem value="spicy">Spicy</SelectItem>
                <SelectItem value="sour">Sour</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_drink"
              checked={formData.isDrink}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isDrink: checked }))}
            />
            <Label htmlFor="is_drink">Is Drink</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Enter ingredients"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="num_sales">Number of Sales</Label>
            <Input
              id="num_sales"
              name="numSales"
              type="number"
              min="0"
              value={formData.numSales}
              onChange={handleChange}
              placeholder="Enter number of sales"
            />
          </div>

          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>

      <div className="mt-5 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Menu Items</h1>
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.id} className="p-2 bg-green-100 rounded hover:bg-green-200 transition flex justify-between items-center">
              <span>
                <span className="font-semibold">{item.name}</span> - {item.price.toFixed(2)} - {item.taste} {item.isDrink && '(Drink)'}
              </span>
                </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
