import { TopNav } from './components/TopNav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { InstallSteps } from './components/InstallSteps'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-tachi-black text-tachi-white">
      <TopNav />
      <main>
        <Hero />
        <Features />
        <InstallSteps />
      </main>
      <Footer />
    </div>
  )
}

export default App
