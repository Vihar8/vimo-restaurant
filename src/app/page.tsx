'use client'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const router = useRouter()

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/restaurant-bg.jpg)' }}>
    //   <div className="bg-white bg-opacity-70 p-10 rounded-lg shadow-lg text-center">
    //     <h1 className="text-5xl font-extrabold mb-8 text-gray-800">Welcome to Vimo Restaurant</h1>
    //     <p className="text-lg text-gray-600 mb-8">Manage your restaurant with ease. Add new staff or update the menu effortlessly.</p>
    //     <div className="space-y-4">
    //       <Button
    //         className="w-64 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
    //         onClick={() => router.push('/person')}
    //       >
    //         Add New Person
    //       </Button>
    //       <Button
    //         className="w-64 py-4 text-lg bg-green-600 hover:bg-green-700 text-white transition duration-300"
    //         onClick={() => router.push('/menu')}
    //       >
    //         Add New Menu
    //       </Button>
    //     </div>
    //   </div>
    // </div>

    <div>
    {/* Navbar */}
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <img className="h-8 w-auto" src="/logo.png" alt="Vimo" />
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#home" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section id="home" className="bg-[url('/restaurant.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="text-center text-black">
        <h1 className="text-5xl font-bold mb-4">Welcome to Vimo Restaurant</h1>
        <p className="text-lg mb-8">Taste the Best Culinary Delights</p>
        <div className="space-y-4 space-x-7">
           <Button
           className="w-50 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
            onClick={() => router.push('/person')}
          >
            Add New Person
          </Button>
          <Button
            className="w-50 py-4 text-lg bg-green-600 hover:bg-green-700 text-white transition duration-300"
            onClick={() => router.push('/menu')}
          >
            Add New Menu
          </Button>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="menu" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Vimo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Gourmet Dishes</h3>
            <p>Prepared by top chefs with fresh ingredients.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Cozy Ambiance</h3>
            <p>Experience a relaxing atmosphere with elegant decor.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Exceptional Service</h3>
            <p>Our staff is dedicated to providing top-notch service.</p>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-8">
          Vimo Restaurant offers a unique dining experience with a blend of traditional and contemporary dishes. Our chefs are passionate about delivering the best flavors, using only the freshest ingredients. Come and enjoy an unforgettable culinary journey at Vimo.
        </p>
      </div>
    </section>

    {/* Footer */}
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Vimo Restaurant. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500">Privacy Policy</a>
            <a href="#" className="hover:text-red-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}
