import './App.css'
import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { ScrollReveal } from './components/ScrollReveal'

function App() {
  return (
    <>
      <ScrollReveal />
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
