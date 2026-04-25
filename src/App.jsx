import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center" className="p-8">
        <div className="hero flex gap-4 justify-center items-center mb-8">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework w-12" alt="React logo" />
          <img src={viteLogo} className="vite w-12" alt="Vite logo" />
        </div>

        <div className="flex flex-col items-center">
          <p className='text-4xl font-bold text-red-500 mb-6'>
            Hello Sohidul
          </p>

          {/* Custom Card (DaisyUI chhara) */}
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <img
              className="w-full"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Card Title</h2>
              <p className="text-gray-600 mb-4">
                A card component designed with pure Tailwind CSS.
              </p>
              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <p className="mt-8">
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* Baki section gulo thik thakbe */}
    </>
  )
}

export default App