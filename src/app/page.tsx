// 'use client'
// import { useRouter } from 'next/navigation'
// import { Button } from "@/components/ui/button"
// import { useState } from 'react'

// export default function HomePage() {
//   const router = useRouter()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-white/30 via-white/50 to-white/30 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="m-2 w-[46px]">
//               <a href="/">
//                 <img src="/vimo.png" alt="Vimo" />
//               </a>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-4 items-center">
//               <a href="#home" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
//                 <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Home</span>
//               </a>
//               <a href="#menu" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
//                 <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Menu</span>
//               </a>
//               <a href="#about" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
//                 <span className="pb-1 border-b-2 border-transparent hover:border-red-500">About</span>
//               </a>
//               <a href="#contact" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
//                 <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Contact</span>
//               </a>
//               {/* Login and Signup Buttons */}
//               <Button
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                 onClick={() => router.push('/login')}
//               >
//                 Login
//               </Button>
//               <Button
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
//                 onClick={() => router.push('/signup')}
//               >
//                 Signup
//               </Button>
//             </div>

//             {/* Mobile Menu */}
//             <div className="md:hidden flex items-center">
//               <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Links */}
//           {isMenuOpen && (
//             <div className="md:hidden">
//               <a href="#home" className="block text-gray-700 hover:text-red-500 px-4 py-2">Home</a>
//               <a href="#menu" className="block text-gray-700 hover:text-red-500 px-4 py-2">Menu</a>
//               <a href="#about" className="block text-gray-700 hover:text-red-500 px-4 py-2">About</a>
//               <a href="#contact" className="block text-gray-700 hover:text-red-500 px-4 py-2">Contact</a>
//               {/* Login and Signup Links for Mobile */}
//               <a href="/login" className="block text-gray-700 hover:text-red-500 px-4 py-2">Login</a>
//               <a href="/signup" className="block text-gray-700 hover:text-red-500 px-4 py-2">Signup</a>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="bg-[url('/vimo.png')] bg-cover bg-center h-screen flex items-center justify-center">
//         <div className="text-center text-white backdrop-blur-lg">
//           <h1 className="text-5xl font-bold mb-4">Welcome to Vimo Restaurant</h1>
//           <p className="text-lg mb-8">Taste the Best Culinary Delights</p>
//           <div className="space-y-4 space-x-7">
//             <Button
//               className="w-50 py-4 text-lg bg-green-600 hover:bg-green-700 text-white transition duration-300"
//               onClick={() => router.push('/menu')}
//             >
//               Add New Menu
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features, About, and Footer Sections remain unchanged */}
//     </div>
//   )
// }



'use client'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function HomePage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Simulate checking authentication status
    const user = localStorage.getItem('user') // Replace with your auth mechanism
    if (user) {
      setIsAuthenticated(true)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('user') // Remove the stored user
    setIsAuthenticated(false)
    router.push('/')
  }

  return (
    <div>
      {/* Navbar */}
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
              <a href="#menu" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
                <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Menu</span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
                <span className="pb-1 border-b-2 border-transparent hover:border-red-500">About</span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 relative transition-all duration-200">
                <span className="pb-1 border-b-2 border-transparent hover:border-red-500">Contact</span>
              </a>
              {!isAuthenticated ? (
                <>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                    onClick={() => router.push('/signup')}
                  >
                    Signup
                  </Button>
                </>
              ) : (
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
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
              <a href="#menu" className="block text-gray-700 hover:text-red-500 px-4 py-2">Menu</a>
              <a href="#about" className="block text-gray-700 hover:text-red-500 px-4 py-2">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-red-500 px-4 py-2">Contact</a>
              {!isAuthenticated ? (
                <>
                  <a href="/login" className="block text-gray-700 hover:text-red-500 px-4 py-2">Login</a>
                  <a href="/signup" className="block text-gray-700 hover:text-red-500 px-4 py-2">Signup</a>
                </>
              ) : (
                <a
                  onClick={handleLogout}
                  className="block text-gray-700 hover:text-red-500 px-4 py-2 cursor-pointer"
                >
                  Logout
                </a>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-[url('/vimo.png')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="text-center text-white backdrop-blur-lg">
          <h1 className="text-5xl font-bold mb-4">Welcome to Vimo Restaurant</h1>
          <p className="text-lg mb-8">Taste the Best Culinary Delights</p>
          <div className="space-y-4 space-x-7">
            <Button
              className="w-50 py-4 text-lg bg-green-600 hover:bg-green-700 text-white transition duration-300"
              onClick={() => router.push('/menu')}
            >
              Add New Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
