import './App.css'
import Contact from './components/contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  return (
    <>
      <div className="overflow-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[length:14px_24px]"></div>
            <div className="absolute top-[-10%] left-0 right-0 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

          </div>
        </div>
        <div className='container mx-auto px-8'>
          <Portfolio />
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
      
    </>
  )
}

export default App
