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
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>&copy; {new Date().getFullYear()} Umut Efe Uygur</span>
        <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
      </footer>
    </>
  )
}

export default App
